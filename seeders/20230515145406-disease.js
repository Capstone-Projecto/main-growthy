'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('diseases', [{
      disease_local_name: 'Penyakit Kuning',
      target: 'Padi',
      scientic_name: 'Tungro',
      disease_desc: 'Penyakit Kuning Pada Padi',
      symptoms: 'Daun Padi Berwarna Kuning',
      prevention: 'Penggunaan Varietas Tahan Tungro',
      causes: 'Virus',
      potention: 'Padi',
      treatment: 'Penggunaan Varietas Tahan Tungro',
      disease_image: 'https://www.pestnet.org/fact_sheets/assets/image/rice_tungro_virus_1_1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      disease_local_name: 'Penyakit Hawar Daun',
      target: 'Padi',
      scientic_name: 'Bacterial Leaf Blight',
      disease_desc: 'Penyakit Hawar Daun Pada Padi',
      symptoms: 'Daun Padi Berwarna Kuning',
      prevention: 'Penggunaan Varietas Tahan Hawar Daun',
      causes: 'Bakteri',
      potention: 'Padi',
      treatment: 'Penggunaan Varietas Tahan Hawar Daun',
      disease_image: 'https://www.pestnet.org/fact_sheets/assets/image/rice_bacterial_leaf_blight_1_1.jpg',
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
