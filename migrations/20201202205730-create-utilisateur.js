'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Utilisateurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tel: {
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
      mail: {
        allowNull:false,
        type: Sequelize.STRING
      },
      mdp: {
        allowNull:false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Utilisateurs');
  }
};