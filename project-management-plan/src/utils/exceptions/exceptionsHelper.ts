import {
    BadRequestException,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { Exception } from './iexception';
  
  export enum Exceptions {
    InvalidData,
    DatabaseException,
    NotFoundData,
  }
  
  export function HandleException({ exception, message }: Exception) {
    if (
      exception === Exceptions.InvalidData ||
      exception === Exceptions.NotFoundData
    ) {
      throw new BadRequestException(message ? message : 'Dados inválidos');
    }
    if (exception === Exceptions.DatabaseException) {
      throw new InternalServerErrorException(
        message ? message : 'Erro no banco de dados',
      );
    }
  }