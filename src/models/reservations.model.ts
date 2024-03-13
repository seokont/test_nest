import { AutoIncrement, Column, ForeignKey, HasOne, Model, PrimaryKey,  Table } from 'sequelize-typescript';
import { Auto } from './auto.model';

@Table({ tableName: 'Reservations' })
export class Reservations extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  
  @ForeignKey(() => Auto)
  @Column
  idAuto: string;

  @Column
  count: number;

  @Column
  price: number;

  @Column
  dataStart: string;

  @Column
  dataFinish: string;

  @HasOne(() => Auto,{ foreignKey: 'id' })
  auto: Auto;
}
