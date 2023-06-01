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
        type: Sequelize.STRING,
        allowNull: true
      },

      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      // Foto Profil
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
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