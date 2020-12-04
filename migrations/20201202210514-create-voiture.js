'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Voitures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imatriculation: {
        allowNull:false,
        type: Sequelize.STRING
      },
      marque: {
        allowNull:true,
        type: Sequelize.STRING
      },
      idClient: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
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
    await queryInterface.dropTable('Voitures');
  }
};