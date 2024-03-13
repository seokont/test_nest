
import { AutoIncrement, ForeignKey, BelongsTo, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Reservations } from './reservations.model';

@Table({ tableName: 'Auto' })
export class Auto extends Model {
  @PrimaryKey
  @ForeignKey(() => Reservations)
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  count: number;


  @HasMany(() => Reservations, { foreignKey: 'idAuto' }) 
  reservation: Reservations[];
}
