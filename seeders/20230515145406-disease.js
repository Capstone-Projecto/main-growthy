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
      disease_img_normal: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/botrytis%20cinerea%20normal.jpg',
      disease_img_wide: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/botrytis%20cinerea%20wide.jpg',
      disease_img_zoom: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/botrytis%20cinerea%20zoom.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      disease_local_name:'Downy Mildew',
      target: 'Berbagai jenis tanaman, termasuk sayuran, buah-buahan, dan tanaman hias seperti anggrek dan mawar.',
      scientic_name: 'Peronosclerospora spp',
      disease_desc: 'Downy mildew adalah jenis penyakit jamur yang menyerang tanaman, terutama pada bagian daun, dan bisa menyebabkan kerusakan yang signifikan pada tanaman.',
      symptoms: 'Gejala Downy mildew biasanya termasuk bercak kuning atau keputihan pada daun, dengan serbuk putih keabuan yang terlihat di bawah permukaan daun. Daun yang terinfeksi juga mungkin menggulung atau layu.', 
      prevention: 'Pencegahan meliputi penggunaan bibit yang sehat, memperhatikan sistem drainase yang baik dan pengendalian kelembaban, memelihara rotasi tanaman, dan menjaga jarak yang cukup antara tanaman untuk mencegah penyebaran penyakit.',
      causes: 'Jamur yang menyerang tanaman dalam kondisi lembab dan dingin.',
      potention: 'Downy mildew dapat menyerang berbagai jenis tanaman, termasuk sayuran seperti bayam, selada, kubis, dan tomat, serta tanaman hias seperti anggrek dan mawar.',
      treatment: ' Pengobatan Downy mildew meliputi penggunaan fungisida, menjaga kelembaban udara yang rendah, pengaturan suhu yang baik, dan penambahan kalsium dan magnesium ke dalam tanah untuk memperkuat tanaman dan meningkatkan ketahanan terhadap penyakit.',
      // gambar penyakit 3 buah
      disease_img_normal: 'https://storage.googleapis.com/disease-img/downy%20mildwe/downy%20mildwe%20normal.jpg',
      disease_img_wide: 'https://storage.googleapis.com/disease-img/downy%20mildwe/downy%20mildwe%20wide.jpg',
      disease_img_zoom: 'https://storage.googleapis.com/disease-img/downy%20mildwe/downy%20mildwe%20zoom.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      disease_local_name:'Black spot',
      target: 'Berbagai jenis tanaman, terutama tanaman hias seperti mawar (Rose spp.) dan daun keladi.',
      scientic_name: 'Diplocarpon rosae',
      disease_desc: 'Black Spot adalah penyakit jamur yang menyerang daun pada berbagai jenis tanaman, menyebabkan bercak hitam pada daun. Jika dibiarkan terus-menerus, penyakit ini dapat menyebabkan kelemahan tanaman, hingga menghambat pertumbuhan dan bahkan kematian tanaman.',
      symptoms: 'Gejala awal dari penyakit ini adalah adanya bercak hitam berukuran kecil pada daun. Bercak ini biasanya mulai muncul pada daun yang lebih tua dan bagian bawah daun. Seiring berkembangnya penyakit, bercak-bercak ini akan semakin besar dan membusuk, dan daun akan terlihat menguning, kemudian layu dan gugur.', 
      prevention: 'Beberapa tindakan pencegahan yang dapat dilakukan adalah menjaga kebersihan lingkungan, menghindari pengairan yang berlebihan, dan memperhatikan sirkulasi udara yang baik. Jika ada daun yang terinfeksi, segera potong dan buang jauh dari tanaman, agar tidak menyebar ke daun yang lain. Pastikan juga untuk memotong tangkai bunga yang terinfeksi.',
      causes: 'Black Spot disebabkan oleh jamur Diplocarpon rosae yang menyebar melalui percikan air atau udara, dan dapat hidup pada daun yang sudah gugur pada tanah. Penyebaran penyakit ini biasanya terjadi pada musim hujan atau saat kelembaban tinggi.',
      potention: 'Black Spot dapat menyerang berbagai jenis tanaman, terutama tanaman hias seperti mawar (Rose spp.) dan daun keladi.',
      treatment: 'Pengobatan untuk Black Spot meliputi pemangkasan dan pembuangan daun yang terinfeksi, pemberian fungisida, serta menjaga sirkulasi udara yang baik. Selain itu, dapat dilakukan tindakan pencegahan seperti yang telah disebutkan di atas.',
      // gambar penyakit 3 buah
      disease_img_normal: 'https://storage.googleapis.com/disease-img/black%20spot/black%20spot%20normal.jpg',
      disease_img_wide: 'https://storage.googleapis.com/disease-img/black%20spot/black%20spot%20wide.jpg',
      disease_img_zoom: 'https://storage.googleapis.com/disease-img/black%20spot/black%20spot%20zoom.jpg',
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
