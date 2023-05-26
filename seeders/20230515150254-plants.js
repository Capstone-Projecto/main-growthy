'use strict';
// Data dummy
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('plants', [{
      local_name: 'Succulent Mini',
      species: 'Echeveria Minima',
      genus: 'Echeveria',
      ordo: 'Saxifragales',
      plant_desc: 'Echeveria minima adalah tanaman sukulen dengan daun menebal berbentuk rosette yang indah. Daunnya berwarna hijau kebiruan, keabu-abuan, atau ungu tua dengan tepi yang bergelombang sedikit. Tanaman ini tumbuh hingga ketinggian sekitar 10 cm dan lebar sekitar 15 cm.',
      cultivation: 'Langkah penanaman',
      plant_disease: 'Penyakit yang umum terjadi pada Echeveria minima adalah busuk akar dan penyakit daun seperti hama kutu daun.',
      prevention: 'Pastikan tanah memiliki drainase yang baik, hindari terlalu sering menyiram tanaman sehingga tanah tidak menjadi terlalu basah. Jaga kebersihan tanaman dan hindari kerumunan tanaman yang terlalu rapat. Pastikan tanaman tidak terlalu lembab dan terkena sinar matahari yang cukup.',
      difficulty: 'Mudah',
      price: 30000,
      // gambar tanaman 3 buah
      plant_images1: 'https://www.plantandpot.nz/wp-content/uploads/2019/03/Echeveria-Minima.jpg',
      plant_images2: 'https://www.plantandpot.nz/wp-content/uploads/2019/03/Echeveria-Minima.jpg',
      plant_images3: 'https://www.plantandpot.nz/wp-content/uploads/2019/03/Echeveria-Minima.jpg',
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
