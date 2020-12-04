'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     models.Entreprise.hasMany(models.Parking);
      models.Entreprise.belongsTo(models.Utilisateur, {
        foreignKey: {
          allowNull:false
        }
      });

      
    }
  };
  Entreprise.init({
    rs: DataTypes.STRING,
    nom: DataTypes.STRING,
    idUtil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entreprise',
  });
  return Entreprise;
};