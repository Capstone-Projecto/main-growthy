'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('financial_dashboards', [{
      date_time: new Date(),
      pemasukan: 1000000,
      desc_pemasukan: 'Gaji',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date_time: new Date(),
      pengeluaran: 500000,
      desc_pengeluaran: 'Makan',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date_time: new Date(),
      pemasukan: 1000000,
      desc_pemasukan: 'Gaji',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
