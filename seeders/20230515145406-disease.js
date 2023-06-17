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
        disease_img_normal: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/new%20gray%20mold%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/new%20gray%20mold%20wide.jpeg',
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/botrytis%20cinerea/new%20gray%20mold%20zoom.jpeg',
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
        disease_img_normal: 'https://storage.googleapis.com/disease-img/downy%20mildwe/new%20downy%20mildew%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/downy%20mildwe/new%20downy%20mildew%20wide.jpeg',    
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/downy%20mildwe/new%20downy%20mildew%20zoom.jpeg',
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
        disease_img_normal: 'https://storage.googleapis.com/disease-img/black%20spot/new%20black%20spot%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/black%20spot/new%20blackspot%20wide.jpeg',
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/black%20spot/new%20black%20spot%20zoom.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    
    },
    {
        disease_local_name:'Powdery Mildew',
        target: 'Powdery Mildew dapat menyerang berbagai jenis tanaman, termasuk tanaman hias seperti mawar, azalea, dan delphinium, serta tanaman pertanian seperti anggur, tomat, kentang, dan apel.',
        scientic_name: 'Sphaerotheca pannosa',
        disease_desc: 'Powdery Mildew adalah penyakit yang disebabkan oleh jamur yang tumbuh di permukaan tanaman. Penyakit ini ditandai dengan adanya lapisan bubuk putih atau abu-abu di atas daun, batang, dan bahkan bunga tanaman. Lapisan tersebut terdiri dari jaringan jamur dan spora yang dapat menyebar dengan mudah.',
        symptoms: 'Gejala umum Powdery Mildew meliputi adanya lapisan bubuk putih atau abu-abu pada permukaan tanaman. Daun yang terinfeksi mungkin mengkerut, menguning, atau bahkan menggugur. Pada beberapa kasus, infeksi yang parah dapat menghambat pertumbuhan tanaman dan mempengaruhi hasil panen. Pada awalnya, bintik-bintik kuning muncul di sisi atas daun. Pada tahap selanjutnya, lapisan tepung berwarna keputihan, setelah itu abu-abuan, menutupi dan menyebar pada daun, batang dan buah. Jamur ini mengambil nutrisi dari tanaman dan lapisan yang terlihat seperti debu pada daun ini menghambat fotosintesis, sehingga pertumbuhan tanaman terhambat. Ketika pennyakit berkembang, bagian yang terinfeksi mengerut, daun rontok, dan tanaman mungkin mati. Berlawanan dengan embun bulu, embun tepung dapat dikendalikan sampai batas tertentu.', 
        prevention: 'Menjaga kebersihan lingkungan tumbuhan dengan membersihkan gulma dan sisa-sisa tanaman yang terinfeksi. Memberikan sirkulasi udara yang baik dengan menjaga jarak antara tanaman. Menerapkan sistem irigasi yang menghindari penumpukan kelembaban di permukaan tanaman. Menggunakan varietas tanaman yang tahan terhadap Powdery Mildew. Melakukan pemangkasan untuk mempromosikan sirkulasi udara dan menghilangkan bagian tanaman yang terinfeksi.',
        causes: 'Powdery Mildew disebabkan oleh infeksi jamur pada tanaman. Faktor-faktor yang mempengaruhi perkembangan penyakit ini antara lain kelembaban tinggi, suhu yang hangat, dan kurangnya sirkulasi udara. Penyebaran spora jamur juga dapat terjadi melalui angin, air, atau serangga. Walaupun ini adalah jamur, embun tepung dapat berkembang cukup normal dalam kondisi kering. Jamur ini bertahan pada suhu antara 10-12°C. Namun, kondisi optimal terjadi pada suhu 30°C. Berlawanan dengan embun bulu, penyebaran embun tepung dipercepat oleh sedikit curah hujan dan embun pagi yang teratur.',
        potention: 'Powdery Mildew dapat berpotensi menyerang berbagai jenis tanaman, baik tanaman hias maupun tanaman pertanian. Tanaman yang tumbuh dalam kondisi yang lembab dan memiliki sirkulasi udara yang buruk rentan terhadap serangan penyakit ini.',
        treatment: 'Untuk mengobati Powdery Mildew pada tanaman, beberapa langkah yang dapat diambil antara lain: 1. Memangkas bagian tanaman yang terinfeksi dan menghilangkan sisa-sisa penyakit. 2. Menggunakan fungisida yang direkomendasikan untuk mengendalikan jamur penyebab Powdery Mildew. 3. Menggunakan bahan alami seperti campuran air dan minyak hortikultura atau campuran air dan baking soda sebagai solusi semprotan. 4. Menerapkan langkah-langkah pencegahan yang telah disebutkan sebelumnya. Penting untuk mencatat bahwa pengobatan dan pencegahan penyakit tanaman dapat bervariasi tergantung pada jenis tanaman yang terinfeksi dan tingkat keparahan infeksinya. Sebaiknya konsultasikan dengan ahli pertanian atau spesialis tanaman untuk mendapatkan rekomendasi yang sesuai untuk kasus yang spesifik.',
        // gambar penyakit 3 buah
        disease_img_normal: 'https://storage.googleapis.com/disease-img/powdery%20mildew/powdery%20mildew%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/powdery%20mildew/powdery%20mildew%20wide.jpeg',
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/powdery%20mildew/powdery%20mildey%20zoom.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    
    },
    {
        disease_local_name:'Leaf Scars',
        target: 'Penyakit Leaf Scars dapat terjadi pada berbagai jenis tanaman, termasuk tanaman hortikultura, tanaman pangan, dan tanaman hutan.',
        scientic_name: 'Nama ilmiah penyakit Leaf Scars bervariasi tergantung pada penyebabnya dan tanaman inangnya.',
        disease_desc: 'Leaf Scars adalah kondisi yang terjadi ketika jaringan daun atau kulit kayu pada tanaman rusak atau terinfeksi. Hal ini mengakibatkan bekas luka pada daun atau batang tanaman. Leaf Scars bisa menjadi pintu masuk bagi patogen lain dan dapat mempengaruhi pertumbuhan dan kesehatan tanaman.',
        symptoms: 'Gejala penyakit Leaf Scars meliputi adanya bekas luka atau kerusakan pada daun atau batang tanaman. Bekas luka tersebut bisa berupa bercak cokelat, hitam, atau bekas luka yang terlihat seperti bekas jeratan atau robekan pada daun. Gejala ini biasanya menunjukkan bahwa tanaman telah mengalami cedera atau infeksi yang mempengaruhi jaringan tanaman.', 
        prevention: 'Menjaga kebersihan lingkungan tumbuhan dengan membersihkan gulma dan sisa-sisa tanaman yang terinfeksi. Menghindari cedera fisik pada tanaman selama kegiatan pertanian atau perawatan. Mengelola kondisi lingkungan yang mempengaruhi kelembaban, suhu, dan sirkulasi udara agar sesuai dengan kebutuhan tanaman. Memastikan tanaman mendapatkan nutrisi yang seimbang dan cukup untuk mempertahankan kesehatan dan daya tahan terhadap penyakit. Menggunakan teknik budidaya yang baik, seperti penyiraman yang tepat dan pemangkasan yang benar, untuk menjaga kondisi tanaman yang optimal.',
        causes: 'Penyebab Leaf Scars bisa bervariasi, termasuk infeksi bakteri, jamur, serangan hama, atau cedera fisik pada tanaman. Faktor lingkungan seperti cuaca ekstrem, kelembaban tinggi, dan kondisi tumbuh yang tidak optimal juga dapat berkontribusi terhadap terjadinya Leaf Scars.',
        potention: 'Penyakit Leaf Scars dapat berpotensi menyerang berbagai jenis tanaman. Tanaman dengan kulit kayu yang terbuka atau daun yang rentan terhadap cedera lebih mungkin mengalami Leaf Scars. Beberapa tanaman yang sering terpengaruh oleh penyakit ini adalah jeruk, apel, stroberi, dan tanaman hias seperti mawar.',
        treatment: 'Pengobatan penyakit Leaf Scars bergantung pada penyebab dan tingkat keparahan infeksi. Beberapa tindakan pengobatan yang mungkin dilakukan antara lain: 1. Menghilangkan bagian tanaman yang terinfeksi dan memusnahkannya. 2. Menggunakan fungisida atau pestisida yang direkomendasikan untuk mengendalikan patogen yang menyebabkan Leaf Scars. 3. Menerapkan teknik sanitasi yang baik, seperti membersihkan alat-alat taman yang terkontaminasi. 4. Memperbaiki kondisi lingkungan tumbuh, seperti mengatur kelembaban udara dan sirkulasi udara yang baik. 5. Konsultasikan dengan ahli pertanian atau spesialis tanaman untuk mendapatkan rekomendasi pengobatan yang tepat berdasarkan jenis tanaman, penyebab, dan tingkat keparahan penyakit Leaf Scars pada tanaman Anda. 6. Penting untuk diingat bahwa pengobatan penyakit tanaman Leaf Scars dapat bervariasi tergantung pada tanaman inang dan faktor-faktor lain yang terlibat. Disarankan untuk berkonsultasi dengan ahli pertanian atau spesialis tanaman untuk mendapatkan petunjuk dan rekomendasi yang tepat dalam mengatasi penyakit ini pada tanaman Anda.',
        // gambar penyakit 3 buah
        disease_img_normal: 'https://storage.googleapis.com/disease-img/leaf%20scarf/leaf%20scarf%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/leaf%20scarf/leaf%20scarf%20wide.jpeg',
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/leaf%20scarf/leaf%20scarf%20zoom.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
    
    },
    {
        disease_local_name:'Rust ',
        target: 'Penyakit Rust dapat menyerang berbagai jenis tanaman, termasuk tanaman hias seperti mawar, delphinium, dan aster, serta tanaman pertanian seperti gandum, jagung, dan kacang-kacangan.',
        scientic_name: 'Penyakit Rust disebabkan oleh beberapa spesies jamur dalam genus Puccinia dan Phragmidium. Nama ilmiah spesies jamur yang menyebabkan penyakit ini bervariasi tergantung pada tanaman inangnya. Contohnya, pada gandum, nama ilmiahnya adalah Puccinia triticina.',
        disease_desc: 'Rust merupakan penyakit jamur yang menyerang daun, batang, dan bagian lain tanaman. Penyakit ini ditandai dengan adanya bercak-bercak berwarna cokelat, oranye, atau merah pada permukaan tanaman. Bercak-bercak tersebut berisi struktur jamur yang disebut teliospora.',
        symptoms: 'Gejala umum Rust meliputi adanya bercak-bercak berwarna cokelat, oranye, atau merah pada daun dan batang tanaman. Bercak-bercak ini biasanya terlihat seperti kerak atau endapan yang dapat mengurangi fotosintesis dan mempengaruhi pertumbuhan tanaman. Pada beberapa kasus, infeksi yang parah dapat menyebabkan daun dan batang mengering.', 
        prevention: '1. Menjaga kebersihan lingkungan tumbuhan dengan membersihkan gulma dan sisa-sisa tanaman yang terinfeksi. 2. Memberikan sirkulasi udara yang baik dengan menjaga jarak antara tanaman. 3. Menerapkan sistem irigasi yang menghindari penumpukan kelembaban di permukaan tanaman. 4. Menggunakan varietas tanaman yang tahan terhadap Rust. 5. Melakukan pemangkasan untuk mempromosikan sirkulasi udara dan menghilangkan bagian tanaman yang terinfeksi.',
        causes: 'Penyakit Rust disebabkan oleh infeksi jamur pada tanaman. Faktor-faktor yang mempengaruhi perkembangan penyakit ini antara lain kelembaban tinggi, suhu yang hangat, dan kurangnya sirkulasi udara. Penyebaran spora jamur dapat terjadi melalui angin, air, serangga, atau kontak langsung dengan tanaman yang terinfeksi.',
        potention: 'Penyakit Rust dapat berpotensi menyerang berbagai jenis tanaman, baik tanaman hias maupun tanaman pertanian. Tanaman yang tumbuh dalam kondisi yang lembab dan memiliki sirkulasi udara yang buruk rentan terhadap serangan penyakit ini.',
        treatment: 'Pengobatan penyakit Rust pada tanaman dapat dilakukan dengan beberapa langkah berikut: 1. Menghilangkan bagian tanaman yang terinfeksi dan memusnahkannya. 2. Penggunaan fungisida yang sesuai dan direkomendasikan untuk mengendalikan jamur penyebab Rust. 3. Penerapan teknik budidaya yang baik, seperti menyediakan sirkulasi udara yang baik, menghindari penumpukan kelembaban, dan memberikan nutrisi yang cukup untuk tanaman. 4. Penggunaan varietas tanaman yang tahan terhadap Rust. 5. Konsultasikan dengan ahli pertanian atau spesialis tanaman untuk mendapatkan rekomendasi pengobatan yang tepat berdasarkan jenis tanaman dan tingkat keparahan infeksi. 6. Penting untuk diketahui bahwa pengendalian penyakit tanaman dapat bervariasi tergantung pada jenis tanaman yang terinfeksi dan tingkat keparahan penyakit. Oleh karena itu, disarankan untuk selalu berkonsultasi dengan ahli pertanian atau spesialis tanaman yang kompeten untuk mendapatkan panduan yang lebih rinci dan rekomendasi yang sesuai dengan kasus spesifik.',
        // gambar penyakit 3 buah
        disease_img_normal: 'https://storage.googleapis.com/disease-img/rust/rust%20normal.jpeg',
        disease_img_wide: 'https://storage.googleapis.com/disease-img/rust/rust%20wide.jpeg',
        disease_img_zoom: 'https://storage.googleapis.com/disease-img/rust/rust%20zoom.jpeg',
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
