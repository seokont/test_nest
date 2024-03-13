import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateAutoDto {
  @ApiProperty({
    example: 'BMW',
    required: true,
    description: 'name',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Дуже добре авто для всієї родини',
    required: true,
    description: 'description',
  })
  description: string;
  @ApiProperty({
    example: 100,
    required: true,
    description: 'price',
  })
  price: number;

  @ApiProperty({
    example: 2,
    required: true,
    description: 'count',
  })
  count: number;
}
