'use strict';
/** @type {import('sequelize-cli').Migration} */
// import 'sequelize-cli'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',defaultValue:Sequelize.literal('CURRENT_TIMESTAMP')

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Prices');
  }
};