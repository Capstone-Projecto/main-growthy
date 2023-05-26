'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('diseases', [{
      disease_local_name: 'Gray Mold',
      target: 'Gray Mold bisa menyerang berbagai jenis tanaman, termasuk buah-buahan, sayuran, bunga, dan tanaman hias.',
      scientic_name: ' Botrytis Cinerea',
      disease_desc: 'Gray Mold adalah penyakit jamur yang menyerang tanaman. Jamur Botrytis cinerea menyebabkan busuk pada buah, bunga, batang, dan daun. Penyakit ini dapat menyebabkan kerugian ekonomi yang signifikan di banyak sektor pertanian dan hortikultura.',
      symptoms: 'Gejala awal dari Gray Mold adalah daun atau buah yang terlihat layu atau kering. Kemudian, serbuk abu-abu muncul di atas daun atau buah yang terinfeksi, yang menandakan adanya jamur. Infeksi yang parah dapat menyebabkan busuk basah pada buah, bunga, dan batang, yang kemudian menjadi lunak dan membusuk.',
      prevention: 'Beberapa cara untuk mencegah penyakit Gray Mold antara lain menjaga kebersihan lingkungan sekitar tanaman, menghindari kelembaban berlebih, menghindari penggunaan pupuk nitrogen berlebihan, membuang tanaman yang terinfeksi, dan memotong daun dan ranting yang terinfeksi.',
      causes: 'Jamur Botrytis cinerea adalah penyebab utama dari penyakit Gray Mold. Jamur ini tumbuh subur pada lingkungan lembap dan berkembang dengan cepat pada tanaman yang lemah atau rusak.',
      potention: 'Gray Mold dapat menyerang berbagai jenis tanaman, termasuk tanaman hias seperti mawar dan krisan, tanaman buah seperti stroberi dan anggur, serta sayuran seperti tomat dan mentimun.',
      treatment: 'Pengobatan Gray Mold meliputi penggunaan fungisida yang mengandung senyawa seperti benomyl, iprodione, atau cyprodinil. Namun, penggunaan fungisida harus dilakukan dengan hati-hati dan tidak berlebihan karena dapat berdampak buruk pada lingkungan dan kesehatan manusia. Pencegahan lebih baik daripada pengobatan.',
      // gambar penyakit 3 buah
      disease_images1: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/gray-mold-botrytis-cinerea.jpg?itok=Z3Z3ZQ4O',
      disease_images2: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/gray-mold-botrytis-cinerea.jpg?itok=Z3Z3ZQ4O',
      disease_images3: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/gray-mold-botrytis-cinerea.jpg?itok=Z3Z3ZQ4O',
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
