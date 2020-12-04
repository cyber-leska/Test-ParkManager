'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Utilisateur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static  associate(models) {
      // define association here
      models.Utilisateur.hasMany(models.Entreprise);
      models.Utilisateur.hasMany(models.Client);
    }
  }

  Utilisateur.init ({
    tel: DataTypes.STRING,
    adresse: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    ville: DataTypes.STRING,
    mail: DataTypes.STRING,
    mdp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Utilisateur',
  });
  return Utilisateur;
};