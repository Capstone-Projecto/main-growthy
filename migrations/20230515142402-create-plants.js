'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      local_name: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      genus: {
        type: Sequelize.STRING
      },
      ordo: {
        type: Sequelize.STRING
      },
      plant_desc: {
        type: Sequelize.TEXT
      },
      cultivation: {
        type: Sequelize.TEXT
      },
      plant_disease: {
        type: Sequelize.STRING
      },
      prevention: {
        type: Sequelize.TEXT
      },
      difficulty: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      plant_img_normal: {
        type: Sequelize.STRING
      },
      plant_img_wide: {
        type: Sequelize.STRING
      },
      plant_img_zoom: {
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
    await queryInterface.dropTable('plants');
  }
};