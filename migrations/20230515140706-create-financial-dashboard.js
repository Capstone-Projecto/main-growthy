'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('financial_dashboards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.DATE
      },
      pemasukan: {
        type: Sequelize.INTEGER
      },
      pengeluaran: {
        type: Sequelize.INTEGER
      },
      desc_pemasukan: {
        type: Sequelize.STRING
      },
      desc_pengeluaran: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('financial_dashboards');
  }
};