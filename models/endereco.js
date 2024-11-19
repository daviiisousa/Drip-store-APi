'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
   endereco.belongsTo(models.cliente,{
    foreignKey:"ClienteId",
    as: "Cliente"
   })
    }
  }
  endereco.init({
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    complemento: DataTypes.STRING,
    cep: DataTypes.STRING,
    rua: DataTypes.STRING,

    
  }, {
    sequelize,
    modelName: 'endereco',
  });
  return endereco;
};