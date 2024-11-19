'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn("enderecos","ClienteIdd",{
      type:Sequelize.INTEGER,
    
      
      references:{
        model:'clientes',
        key:'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',

     })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('enderecos', 'ClienteIdd');
  }
};
