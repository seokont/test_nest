import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Reservations } from 'src/models/reservations.model';
import { Auto } from 'src/models/auto.model';


@Injectable()
export class ReservationService {
  constructor(
    @InjectModel(Reservations)
    private reservationModel: typeof Reservations,
    @InjectModel(Auto)
    private autoModel: typeof Auto,
  ) {}
  async create(createReservationDto: CreateReservationDto) {
    const reserv = await this.autoModel.findOne({
      where: { id: createReservationDto.idAuto },
    });

    if (reserv.count === 0) {
      throw new BadRequestException('Не може бути 0!');
    }
    const object = new Reservations({
      idAuto: createReservationDto.idAuto,
      price: createReservationDto.price,
      count: createReservationDto.count,
      dataStart: createReservationDto.dataStart,
      dataFinish: createReservationDto.dataFinish,
    });
    await object.save();

    await this.autoModel.update(
      { count: reserv.count - createReservationDto.count },
      { where: { id: createReservationDto.idAuto } },
    );

    return { ...object };
  }

  async findAll() {
    return await this.reservationModel.findAll();
  }

  async findOne(id: number) {
    return await this.reservationModel.findOne({ where: { id } });
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
    const reservation = await this.reservationModel.update(
      {
        count: updateReservationDto.count,
        price: updateReservationDto.price,
        dataStart: updateReservationDto.dataStart,
        idAuto: updateReservationDto.idAuto,
        dataFinish: updateReservationDto.dataFinish,
      },
      { where: { id } },
    );

    return reservation;
  }

  async remove(id: number) {
    const reservCountRes = await this.reservationModel.findOne({
      where: { id },
    });

    if (!reservCountRes) {
      throw new BadRequestException('Не може бути 0!');
    }

    const reservCount = await this.autoModel.findOne({
      where: { id: reservCountRes.idAuto },
    });

    await this.autoModel.update(
      { count: reservCount.count + reservCountRes.count },
      { where: { id: reservCountRes.idAuto } },
    );

    await this.reservationModel.destroy({
      where: { id },
    });

    return { result: `ok` };
  }
}
