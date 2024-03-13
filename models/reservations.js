'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservations.hasOne(models.Auto, { foreignKey: 'id' });
      // define association here
    }
  }
  Reservations.init({
    idAuto: DataTypes.INTEGER,
    count: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    dataStart: DataTypes.STRING,
    dataFinish: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};