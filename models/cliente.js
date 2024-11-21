'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      clientes.hasMany(models.endereco,{
        foreignKey:"ClienteIdd",
        as:"Cliente"


      })
    }
  }
  clientes.init({
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    celular: DataTypes.STRING,
    senha: DataTypes.STRING
  
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return clientes;
};