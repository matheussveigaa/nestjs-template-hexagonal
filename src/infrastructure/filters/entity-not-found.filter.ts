import { EntityNotFoundException } from '@domain/exceptions/entity-not-found.exception';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(EntityNotFoundException)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.NOT_FOUND;

    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
