import { ApiProperty } from '@nestjs/swagger';

export class CreateReservationDto {
  @ApiProperty({
    example: 2,
    required: true,
    description: 'ID auto',
  })
  idAuto: string;

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

  @ApiProperty({
    example: '2024-03-01',
    required: true,
    description: 'data start',
  })
  dataStart: string;

  @ApiProperty({
    example: '2024-03-02',
    required: true,
    description: 'data finish',
  })
  dataFinish: string;
}
