'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Occupations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temps_occup: {
    
        type: Sequelize.STRING
      },
      date_occup: {
        allowNull:false,
        type: Sequelize.DATE
      },
      date_fin: {
        allowNull:true,
        type: Sequelize.DATE
      },
      heure_occup: {
        allowNull:false,
        type: Sequelize.TIME
      },
      heure_fin: {
        allowNull:true,
        type: Sequelize.TIME
      },
      idPlace: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'places',
          key:'id'
        }
      },
      idVoiture: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {
          model: 'voitures',
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
    await queryInterface.dropTable('Occupations');
  }
};