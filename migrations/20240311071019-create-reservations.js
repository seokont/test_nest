'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,       
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      idAuto: {
        type: Sequelize.INTEGER,
        key: true,
        references: {
          model: {
            tableName: 'Auto',
          },
          key: 'id',
        },
      },
      count: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      dataStart: {
        type: Sequelize.DATE,
      },
      dataFinish: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  },
};
