'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cliente.hasMany(models.endereco,{
        foreignKey:"ClienteId",
        as:"Cliente"


      })
    }
  }
  cliente.init({
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    celular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};