import { Injectable } from '@nestjs/common';
import { Transform } from 'stream';
import { DataFormatterService } from '../../interfaces/data-formatter-service.interface';

type Entity = {
  name: string;
  parent: Entity | null;
  add: (key: string, value: any) => void;
  data: Record<string, unknown> | unknown[] | unknown;
};

const createArray = (name: string, parent: Entity): Entity => {
  const data: unknown[] = [];
  return {
    name,
    parent,
    add: function (key, value) {
      data.push(value);
    },
    data,
  };
};

const createObject = (name: string, parent: Entity): Entity => {
  const data: Record<string, unknown> = {};
  return {
    name,
    parent,
    add: function (key, value) {
      data[key] = value;
    },
    data,
  };
};

const createValue = (name, value, parent): Entity => {
  let dataValue: unknown = value;
  return {
    name,
    parent,
    add: function (key, value) {
      dataValue = value;
    },
    data: dataValue,
  };
};

const createEntity = (name: string, parent: Entity): Entity => {
  const arrayEntities = ['exchange-offices', 'rates', 'exchanges', 'countries'];

  if (arrayEntities.includes(name)) {
    return createArray(name, parent);
  }

  if (name.includes('=')) {
    const [key, value] = name.split('=').map((str) => str.trim());
    return createValue(key, value, parent);
  }

  return createObject(name, parent);
};

const processEntity = (entity: Entity, data: Record<string, unknown>) => {
  if (entity.parent) {
    entity.parent.add(entity.name, entity.data);
  } else {
    data[entity.name] = entity.data;
  }
};

@Injectable()
export class CustomFormatterService implements DataFormatterService {
  getParser(): Transform {
    const stack = [{ entity: createObject('root', null), indentation: -1 }];
    const data = {};
    let chunkIndex = 0;
    let lineIndex = 0;
    return new Transform({
      readableObjectMode: true,
      transform(chunk, encoding, callback) {
        chunkIndex++;
        console.log(chunkIndex, chunk.toString());
        const lines = chunk.toString().split('\n');
        if (!Array.isArray(lines)) {
          callback();
          return;
        }

        lines.forEach((line) => {
          lineIndex++;
          const indentation = line.search(/\S/);
          const trimmedLine = line.trim();
          console.log(lineIndex, indentation, line.trim());
          if (trimmedLine === '') {
            return;
          }

          while (
            stack.length > 1 &&
            indentation <= stack[stack.length - 1].indentation
          ) {
            const { entity } = stack.pop();
            processEntity(entity, data);
          }

          stack.push({
            entity: createEntity(trimmedLine, stack[stack.length - 1].entity),
            indentation,
          });
        });

        callback();
      },
      flush(callback) {
        // finalize remaining entities
        lineIndex++;
        while (stack.length > 1) {
          const { entity } = stack.pop();
          processEntity(entity, data);
        }

        callback();
      },
    });
  }
}
