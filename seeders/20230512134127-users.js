// Seeders are used to populate database with some initial data.

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('users', [{
    //   name: 'John',
    //   email: 'example@example.com',
    //   password: '123456',
    //   gender: 'male',
    //   phone: '08123456789',
    //   address: 'Jl. Jalan',
    //   balance: 1000000,
    //   avatar: 'avatar.png',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
