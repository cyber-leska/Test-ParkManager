'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        allowNull:false,
        type: Sequelize.STRING
      },
      dispo: {
        allowNull:false,
        type: Sequelize.BOOLEAN
      },
      idEtage: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'etages',
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
    await queryInterface.dropTable('Places');
  }
};