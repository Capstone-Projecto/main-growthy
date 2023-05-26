// migrate:latest --env development --migrations-path migrations --config config/config.json

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING,
        unique: true
      },

      password: {
        type: Sequelize.STRING
      },

      gender: {
        type: Sequelize.STRING
      },

      phone: {
        type: Sequelize.STRING
      },

      address: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.INTEGER
      },
      // Foto Profil
      avatar: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('users');
  }
};