import { Module } from '@nestjs/common';
import { AutosService } from './auto.service';
import { AutosController } from './auto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auto } from 'src/models/auto.model';
import { MyLoggerService } from 'src/logger/logger';


@Module({
  imports: [SequelizeModule.forFeature([Auto])],
  controllers: [AutosController],
  providers: [AutosService, MyLoggerService],
})
export class AutosModule {}
