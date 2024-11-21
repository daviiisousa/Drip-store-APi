'use strict';

const { query } = require('express');
const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.addColumn("clientes","senha",{
    type:Sequelize.STRING,
    allowNull:false

  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("clientes","senha")
  }
};
