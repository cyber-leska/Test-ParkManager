'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Etage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Etage.belongsTo(models.Parking, {
        foreignKey: {
          allowNull:false
        }
      });
      models.Etage.hasMany(models.Place);
    }
  };
  Etage.init({
    numero: DataTypes.INTEGER,
    nbrPlace: DataTypes.INTEGER,
    idPark: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Etage',
  });
  return Etage;
};