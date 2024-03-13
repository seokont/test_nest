import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';


import { Auto } from './models/auto.model';
import { ReservationModule } from './reservation/reservation.module';
import { AutosModule } from './auto/auto.module';
import { Reservations } from './models/reservations.model';
import { LogMiddleware } from './middleware/log.middleware';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Maqim1981!',
      database: 'my_test',
      models: [ Auto, Reservations],
    }),
 
    ReservationModule,
   AutosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*');
  }
}

