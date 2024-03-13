import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Auto } from 'src/models/auto.model';
import { Reservations } from 'src/models/reservations.model';

@Injectable()
export class AutosService {
  constructor(
    @InjectModel(Auto)
    private autoModel: typeof Auto,
  ) {}
  async create(createAutoDto: CreateAutoDto) {
    const object = new Auto({
      name: createAutoDto.name,
      price: createAutoDto.price,
      description: createAutoDto.description,
      count: createAutoDto.count,
    });
    await object.save();

    return { ...object.dataValues };
  }

  findAll() {
    return this.autoModel.findAll({
      include: { model: Reservations, as: 'reservation' },
    });
  }

  async findOne(id: number) {
    const auto = await this.autoModel.findOne({ where: { id } });
    if (!auto) {
      throw new BadRequestException('Не найден!');
    }

    return auto;
  }

  async update(id: number, updateAutoDto: UpdateAutoDto) {
    await this.autoModel.update(
      {
        name: updateAutoDto.name,
        price: updateAutoDto.price,
        description: updateAutoDto.description,
        count: updateAutoDto.count,
      },
      { where: { id } },
    );

    return { result: true };
  }

  async remove(id: number) {
    await this.autoModel.destroy({ where: { id } });
    return { result: 'success' };
  }
}
