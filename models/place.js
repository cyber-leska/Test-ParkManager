'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Place.belongsTo(models.Etage, {
        foreignKey: {
          allowNull:false
        }
      });
      models.Place.hasMany(models.Occupation);
    }
  };
  Place.init({
    numero: DataTypes.STRING,
    dispo: DataTypes.BOOLEAN,
    idEtage: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};