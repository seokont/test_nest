import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reservations } from 'src/models/reservations.model';
import { Auto } from 'src/models/auto.model';

@Module({
  imports: [SequelizeModule.forFeature([Reservations, Auto])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
