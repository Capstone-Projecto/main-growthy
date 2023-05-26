'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users_has_financial_dashboards', [{
      user_id: 1,
      financial_dashboard_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {});
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
