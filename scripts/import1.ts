import * as lineReader from 'line-reader';

const filePath = './data/exchange.lst';

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

const processEntity = (entity: Entity) => {
  if (entity.parent) {
    entity.parent.add(entity.name, entity.data);
  }
};

const stack = [{ entity: createObject('root', null), indentation: -1 }];

lineReader.eachLine(filePath, function (line: string, last: boolean) {
  const indentation = line.search(/\S/);
  const trimmedLine = line.trim();

  if (trimmedLine === '') {
    return;
  }

  while (
    stack.length > 1 &&
    indentation <= stack[stack.length - 1].indentation
  ) {
    const { entity } = stack.pop();
    processEntity(entity);
  }

  stack.push({
    entity: createEntity(trimmedLine, stack[stack.length - 1].entity),
    indentation,
  });

  if (last) {
    // Process all remaining entities on the stack
    while (stack.length > 1) {
      const { entity } = stack.pop();
      processEntity(entity);
    }

    try {
      console.log(JSON.stringify(stack[0].entity.data, null, 2));
    } catch (error) {
      console.log('Failed to stringify data. Inspecting contents...');
      console.log(stack[0].entity.data);
    }
  }
});
