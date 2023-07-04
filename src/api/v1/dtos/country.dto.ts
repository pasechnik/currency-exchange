import { ExchangeOfficeDto } from './exchange-office.dto';
import { Country as CountryEntity } from '@prisma/client';
import { DTOConvert } from '../../../data-import/types/dto-convert.type';

export type CountryDtoStaticMethods = DTOConvert<CountryDto, CountryEntity>;

export class CountryDto {
  code: string;
  name: string;
  offices: ExchangeOfficeDto[];

  constructor(code: string, name: string, offices: ExchangeOfficeDto[]) {
    this.code = code;
    this.name = name;
    this.offices = offices;
  }

  static toEntity(dto: CountryDto): CountryEntity {
    return {
      code: dto.code,
      name: dto.name,
      // offices: [],
      // offices: dto.offices.map(ExchangeOfficeDto.toEntity),
    };
  }

  // Conversion method: Prisma entity to DTO
  static fromEntity(entity: CountryEntity): CountryDto {
    return {
      code: entity.code,
      name: entity.name,
      offices: [],
      // offices: entity.offices.map(ExchangeOfficeDto.fromEntity),
    };
  }
}
