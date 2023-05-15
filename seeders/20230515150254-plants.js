'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('plants', [{
      local_name: 'Padi',
      species: 'Oryza sativa',
      genus: 'Oryza',
      ordo: 'Poales',
      plant_desc: 'Padi adalah tanaman pangan yang sangat penting bagi kehidupan manusia. Padi merupakan sumber karbohidrat yang sangat baik bagi manusia. Padi juga merupakan sumber bahan pangan yang sangat penting bagi hewan ternak. Padi juga merupakan sumber bahan baku industri.',
      cultivation: 'Padi dapat ditanam di lahan sawah maupun lahan kering. Padi dapat ditanam di lahan sawah dengan cara menanam bibit padi di lahan yang telah dialiri air. Padi dapat ditanam di lahan kering dengan cara menanam bibit padi di lahan yang tidak dialiri air.',
      plant_disease: 'Bercak Daun Coklat, Hawar Daun Bakteri, Hawar Daun Cercospora, Hawar Daun Helminthosporium, Hawar Daun Tungro, Hawar Daun Xanthomonas, Hawar Daun Bipolaris, Hawar Daun Pseudomonas, Hawar Daun Pyricularia, Hawar Daun Rhizoctonia, Hawar Daun Septoria, Hawar Daun Thanatephorus',
      prevention: 'Penggunaan Varietas Tahan Hawar Daun',
      difficulty: 'Sulit',
      price: 10000,
      plant_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rice_Plant_%28Oryza_sativa%29.jpg/1200px-Rice_Plant_%28Oryza_sativa%29.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      local_name: 'Jagung',
      species: 'Zea mays',
      genus: 'Zea',
      ordo: 'Poales',
      plant_desc: 'Jagung adalah tanaman pangan yang sangat penting bagi kehidupan manusia. Jagung merupakan sumber karbohidrat yang sangat baik bagi manusia. Jagung juga merupakan sumber bahan pangan yang sangat penting bagi hewan ternak. Jagung juga merupakan sumber bahan baku industri.',
      cultivation: 'Jagung dapat ditanam di lahan sawah maupun lahan kering. Jagung dapat ditanam di lahan sawah dengan cara menanam bibit jagung di lahan yang telah dialiri air. Jagung dapat ditanam di lahan kering dengan cara menanam bibit jagung di lahan yang tidak dialiri air.',
      plant_disease: 'Busuk Batang, Busuk Buah, Busuk Daun, Bu',
      prevention: 'Penggunaan Varietas Tahan Hawar Daun',
      difficulty: 'Sulit',
      price: 10000,
      plant_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rice_Plant_%28Oryza_sativa%29.jpg/1200px-Rice_Plant_%28Oryza_sativa%29.jpg',
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
