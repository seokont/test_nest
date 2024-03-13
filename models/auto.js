'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Auto.hasMany(models.Reservations, { foreignKey: 'idAuto' });
      // define association here
    }
  }
  Auto.init(
    {
      description: DataTypes.STRING,
      name: DataTypes.STRING,
      count: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Auto',
    },
  );
  return Auto;
};
