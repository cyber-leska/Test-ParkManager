'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Etages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      nbrPlace: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      idPark: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'parkings',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Etages');
  }
};