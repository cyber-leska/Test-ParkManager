'use strict';
const {
  Model
} = require('sequelize','DataTypes');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Client.hasMany(models.Voiture); 
      // define association here
      models.Client.belongsTo(models.Utilisateur, {
        foreignKey: {
            allowNull:false
        }
      });
      
    
    }
  };

  Client.init({

    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    idUtil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};