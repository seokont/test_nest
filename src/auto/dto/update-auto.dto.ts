import { PartialType } from '@nestjs/swagger';
import { CreateAutoDto } from './create-auto.dto';

export class UpdateAutoDto extends PartialType(CreateAutoDto) {
  name: string;
  description: string;
  price: number;
  count: number;
}
