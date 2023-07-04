export type DTOConvert<T, U> = {
  toEntity(dto: T): U;
  fromEntity(entity: U): T;
};
