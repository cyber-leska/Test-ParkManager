'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Entreprises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rs: {
        allowNull:false,
        type: Sequelize.STRING
      },
      nom: {
        allowNull:false,
        type: Sequelize.STRING
      },
      idUtil: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'utilisateurs',
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
    await queryInterface.dropTable('Entreprises');
  }
};