'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Parking.belongsTo(models.Entreprise, {
        foreignKey: {
          allowNull:false
        }
      });
      models.Parking.hasMany(models.Etage);
    }
  };
  Parking.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    ville: DataTypes.STRING,
    nbrPlace: DataTypes.INTEGER,
    idEntreprise: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};