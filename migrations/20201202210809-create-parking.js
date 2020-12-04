'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Parkings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        allowNull:false,
        type: Sequelize.STRING
      },
      adresse: {
        allowNull:false,
        type: Sequelize.STRING
      },
      cp: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      ville: {
        allowNull:false,
        type: Sequelize.STRING
      },
      nbrPlace: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      idEntreprise: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'entreprises',
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
    await queryInterface.dropTable('Parkings');
  }
};