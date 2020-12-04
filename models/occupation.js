'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Occupation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Occupation.belongsTo(models.Place, {
        foreignKey: {
          allowNull:false
        }
      });
      models.Occupation.belongsTo(models.Voiture, {
        foreignKey: {
          allowNull:false
        }
      });
    }
  };
  Occupation.init({
    temps_occup: DataTypes.STRING,
    date_occup: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    heure_occup: DataTypes.TIME,
    heure_fin: DataTypes.TIME,
    idPlace: DataTypes.INTEGER,
    idVoiture: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Occupation',
  });
  return Occupation;
};