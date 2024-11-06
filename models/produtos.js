'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    categoria: DataTypes.STRING,
    precoAntigo: DataTypes.INTEGER,
    precoNovo: DataTypes.INTEGER,
    desconto: DataTypes.FLOAT,
    imagem: {
      type: DataTypes.TEXT(15000), 
      allowNull: false    }
  }, {
    sequelize,
    modelName: 'Produtos',

  });
  return Produtos;
};