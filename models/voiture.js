'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voiture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Voiture.belongsTo(models.Client, {
        foreignKey: {
          allowNull:false
        }
      });
      models.Voiture.hasMany(models.Occupation);
    }
  };
  Voiture.init({
    imatriculation: DataTypes.STRING,
    marque: DataTypes.STRING,
    idClient: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Voiture',
  });
  return Voiture;
};