'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users_has_financial_dashboards', [
      {
      user_id: 1,
      financial_dashboard_id: 1,
    },
    {
    user_id: 1,
    financial_dashboard_id: 2,
  },
  {
    user_id: 1,
    financial_dashboard_id: 2,
  }], {});
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
