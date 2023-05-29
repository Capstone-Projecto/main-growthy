'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('diseases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      disease_local_name: {
        type: Sequelize.STRING
      },
      target: {
        type: Sequelize.STRING
      },
      scientic_name: {
        type: Sequelize.STRING
      },
      disease_desc: {
        type: Sequelize.TEXT
      },
      symptoms: {
        type: Sequelize.TEXT
      },
      prevention: {
        type: Sequelize.TEXT
      },
      causes: {
        type: Sequelize.TEXT
      },
      potention: {
        type: Sequelize.STRING
      },
      treatment: {
        type: Sequelize.TEXT
      },
      disease_img_normal: {
        type: Sequelize.STRING
      },
      disease_img_wide: {
        type: Sequelize.STRING
      },
      disease_img_zoom: {
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
    await queryInterface.dropTable('diseases');
  }
};