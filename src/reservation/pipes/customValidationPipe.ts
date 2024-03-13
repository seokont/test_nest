import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (value && Object.keys(value).length === 0) {
      throw new BadRequestException("Об'єкт не може бути порожнім");
    }

    if (!value.price || /^-?\d+(?:\.\d+)?$/.test(value.price) === false) {
      throw new BadRequestException('Невірно значення price');
    }

    if (!value.count ) {
      throw new BadRequestException("Обов'язкова запись");
    }
    if (!metatype || this.toValidate(metatype)) {
      return { ...value };
    }

    const obj = plainToClass(metatype, value);
    const errors = await validate(obj);

    if (errors.length > 0) {
      throw new BadRequestException('Валідація не прошла');
    }

    return { ...value };
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
