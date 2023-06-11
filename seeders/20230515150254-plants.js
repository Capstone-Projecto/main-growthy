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
        cultivation: '1. Pilih pot yang sesuai dengan ukuran tanaman, 2. Siapkan campuran tanah yang cocok untuk tanaman sukulen, 3. Pilih bibit/tanaman yang sehat, 4. Tanam bibit/tanaman di pot dengan campuran tanah, jangan terlalu dalam atau terlalu rendah, 5. Siram bibit/tanaman secukupnya dan letakkan di lokasi yang terkena sinar matahari langsung.',
        plant_disease: 'Penyakit yang umum terjadi pada Echeveria minima adalah busuk akar dan penyakit daun seperti hama kutu daun.',
        prevention: 'Pastikan tanah memiliki drainase yang baik, hindari terlalu sering menyiram tanaman sehingga tanah tidak menjadi terlalu basah. Jaga kebersihan tanaman dan hindari kerumunan tanaman yang terlalu rapat. Pastikan tanaman tidak terlalu lembab dan terkena sinar matahari yang cukup.',
        difficulty: 'Mudah',
        price: 30000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/echeveria%20minima/echeveria%20minima%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/echeveria%20minima/echeveria%20minima%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/echeveria%20minima/echeveria%20minima%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Kaktus Jumbai Halus',
        species: 'Mammillaria hahniana',
        genus: 'Mammillaria',
        ordo: 'Caryophyllales',
        plant_desc: 'Mammillaria hahniana adalah tanaman kaktus yang berasal dari Meksiko. Tanaman ini memiliki bentuk bulat dengan tubuh hijau pucat dan dilapisi dengan jumbai-jumbai kecil yang disebut areola. Bunga yang muncul pada musim semi hingga musim panas berwarna putih hingga merah muda.',
        cultivation: '1. Pilih pot yang sesuai dengan ukuran kaktus, 2. Siapkan campuran tanah yang cocok untuk kaktus, 3. Pilih bibit/tanaman yang sehat, 4. Tanam bibit/tanaman di pot dengan campuran tanah, pastikan tidak terlalu dalam atau terlalu rendah, 5. Siram bibit/tanaman secukupnya dan letakkan di lokasi yang terkena sinar matahari penuh atau sedikit teduh.',
        plant_disease: 'Penyakit yang umum terjadi pada Echeveria minima adalah busuk akar dan penyakit daun seperti hama kutu daun.',
        prevention: 'Pastikan tanah yang digunakan untuk menanam kaktus cukup gembur dan tidak terlalu lembab. Hindari terlalu banyak menyiram kaktus dan periksa secara berkala untuk menghindari serangan jamur atau bakteri. Jaga kebersihan lingkungan tanaman untuk menghindari serangan serangga.',
        difficulty: 'Mudah',
        price: 60000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/mammillaria%20hahniana/mammillaria%20hahniana%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/mammillaria%20hahniana/mammillaria%20hahniana%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/mammillaria%20hahniana/mammillaria%20hahniana%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Janda Bolong',
        species: 'Monstera adansonii',
        genus: 'Monstera',
        ordo: 'Alismatales',
        plant_desc: 'Monstera adansonii, juga dikenal sebagai tanaman Swiss cheese vine, adalah tanaman merambat yang berasal dari Amerika Selatan. Tanaman ini memiliki daun hijau gelap dengan pola lobus yang unik dan menarik perhatian. Buahnya memiliki rasa manis dan disukai oleh burung-burung dan hewan kecil.',
        cultivation: '1. Pilih pot yang sesuai dengan ukuran tanaman, 2. Siapkan campuran tanah yang cocok untuk tanaman ini, 3. Pilih bibit/tanaman yang sehat, 4. Tempatkan bibit/tanaman di pot dengan campuran tanah, pastikan tidak terlalu dalam atau terlalu rendah, 5. Letakkan pot di tempat yang sesuai dengan kebutuhan sinar matahari dan kelembapan.',
        plant_disease: 'Monstera adansonii rentan terhadap serangan kutu daun, jamur, dan bakteri yang dapat menyebabkan kerusakan pada daun dan batang tanaman.',
        prevention: 'Pastikan tanaman ditempatkan di tempat yang tidak terlalu lembap dan terlalu kering, hindari terlalu banyak menyiram tanaman, serta jaga kebersihan lingkungan tanaman. Gunakan insektisida atau fungisida secara teratur jika diperlukan.',
        difficulty: 'Mudah',
        price: 275000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/monstera%20adansonii%20/monstera%20adansonii%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/monstera%20adansonii%20/monstera%20adansonii%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/monstera%20adansonii%20/monstera%20adansonii%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Keladi',
        species: 'Caladium bicolor',
        genus: 'Caladium',
        ordo: 'Alismatales',
        plant_desc: 'Caladium bicolor adalah tanaman hias daun dengan daun berbentuk hati atau segitiga yang indah dan berwarna-warni. Tanaman ini terkenal karena keindahan daunnya, yang memiliki warna yang menarik dan pola yang rumit.',
        cultivation: 'Caladium bicolor dapat ditanam di dalam pot atau di tanah. Pastikan tanah yang digunakan memiliki pH netral atau sedikit asam. Tanaman ini membutuhkan drainase yang baik untuk mencegah kelembaban yang berlebihan.',
        plant_disease: 'Beberapa penyakit yang mungkin menyerang tanaman Caladium bicolor antara lain busuk akar, layu, dan jamur daun.',
        prevention: 'Untuk mencegah penyakit, pastikan tanaman tidak terlalu basah, terutama pada daun dan akar. Juga, pastikan tanah memiliki drainase yang baik dan hindari penyiraman yang berlebihan.',
        difficulty: 'Mudah',
        price: 60000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/caladium%20bicolor/caladium%20bicolor%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/caladium%20bicolor/caladium%20bicolor%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/caladium%20bicolor/caladium%20bicolor%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Kaktus anggur',
        species: 'Sedum morganianum',
        genus: 'Sedum',
        ordo: 'Saxifragales',
        plant_desc: 'Tanaman hias sukulen yang dikenal dengan nama burros tail atau ekor keledai, memiliki batang bergelombang yang tumbuh merayap dan cabangnya ditutupi oleh daun tebal, hijau kebiruan atau keabu-abuan, dan berbentuk silinder.',
        cultivation: 'Tanam Sedum morganianum pada pot dengan campuran media tanam yang terdiri dari tanah, pasir, dan humus dengan perbandingan 1:1:1. Pastikan pot memiliki lubang drainase untuk menghindari genangan air yang dapat membusukkkan akar. Sirami secara teratur dan letakkan di tempat yang terkena sinar matahari yang cukup.',
        plant_disease: 'Penyakit yang umum terjadi pada Sedum morganianum adalah jamur pada daun dan batang tanaman, penyakit busuk akar, dan serangan hama seperti kutu dan ulat.',
        prevention: 'Menjaga kebersihan dan kelembaban udara yang cukup serta memberi ruang antar tanaman yang cukup untuk meningkatkan sirkulasi udara.',
        difficulty: 'Mudah',
        price: 115000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/sedum%20morganianum/sedum%20morganianum%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/sedum%20morganianum/sedum%20morganianum%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/sedum%20morganianum/sedum%20morganianum%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Lidah Buaya',
        species: 'Aloe vera',
        genus: 'Aloe',
        ordo: 'Asparagales',
        plant_desc: 'Aloe vera adalah tanaman sukulen yang memiliki daun tebal dan berair dengan tepi bergerigi. Tanaman ini juga dikenal dengan nama lidah buaya karena gel yang terkandung di dalam daunnya dapat digunakan sebagai bahan alami untuk perawatan kulit dan rambut.',
        cultivation: 'Tanaman aloe vera dapat ditanam di pot atau langsung di tanah dengan media tanam yang terdiri dari campuran pasir dan tanah dengan perbandingan 1:1. Pastikan media tanam memiliki drainase yang baik untuk menghindari terjadinya penyakit akibat kelembaban yang berlebihan.',
        plant_disease: 'Tanaman aloe vera dapat terkena penyakit busuk akar, layu, atau jamur jika terlalu banyak terkena air atau kelembaban.',
        prevention: 'Pastikan tanaman tidak terlalu banyak terkena air atau kelembaban, serta menjaga kebersihan pot dan media tanam yang digunakan. Pemangkasan juga dapat dilakukan pada daun atau cabang yang terlihat sakit.',
        difficulty: 'Mudah',
        price: 60000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/aloe%20vera/aloe%20vera%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/aloe%20vera/aloe%20vera%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/aloe%20vera/aloe%20vera%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Lumut spanyol/ jenggot musa',
        species: 'Tillandsia usneoides',
        genus: 'Tillandsia',
        ordo: 'Poales',
        plant_desc: 'Tillandsia usneoides atau Spanish moss adalah jenis tanaman epifit yang tumbuh menempel di batang atau ranting pohon dengan akar yang tidak menyerap nutrisi dari inangnya. Tanaman ini memiliki batang ramping dan daun yang berbentuk spiral. Bunga kecil berwarna ungu dan tidak terlalu menonjol.',
        cultivation: 'Dapat diletakkan di atas kayu atau benda lain yang bisa menopang, atau ditanam dalam pot dengan media tanam yang bisa menahan kelembapan tanpa menyimpan air terlalu lama.',
        plant_disease: 'Jamur dan bakteri',
        prevention: 'Pastikan lingkungan tumbuh bersih dan tidak lembap. Jangan menyiram terlalu banyak air ke dalam tanaman.',
        difficulty: 'Mudah',
        price: 125000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/tillandsia%20usneoides/tillandsia%20usneoides%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/tillandsia%20usneoides/tillandsia%20usneoides%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/tillandsia%20usneoides/tillandsia%20usneoides%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Bunga 8 dewa',
        species: 'Euphorbia milii ',
        genus: 'Euphorbia',
        ordo: 'Malpighiales',
        plant_desc: 'Euphorbia milii atau disebut juga kaktus mahkota dewa adalah tanaman sukulen yang berasal dari Madagaskar. Tanaman ini memiliki duri dan biasanya tumbuh tegak atau merambat dengan bentuk bunga yang indah dan unik.',
        cultivation: 'Tanam pada tanah yang gembur dan kaya nutrisi. Pastikan untuk memberikan cukup sinar matahari dan penyiraman yang cukup.',
        plant_disease: 'Penyakit yang mungkin menyerang Euphorbia milii antara lain busuk akar, layu bakteri, dan jamur daun.',
        prevention: 'Jaga kebersihan lingkungan dan pastikan tanaman tidak terlalu lembab. Hindari juga over watering dan penggunaan pupuk berlebihan yang dapat memicu pertumbuhan jamur.',
        difficulty: 'Mudah',
        price: 265000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/euphorbia%20milli/euphorbia%20milli%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/euphorbia%20milli/euphorbia%20milli%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/euphorbia%20milli/euphorbia%20milli%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Kuping Gajah',
        species: 'Anthurium crystallinum',
        genus: 'Anthurium',
        ordo: 'Alismatales',
        plant_desc: 'Anthurium crystallinum adalah tanaman hias yang berasal dari Amerika Selatan. Tanaman ini memiliki daun berbentuk hati dengan permukaan yang mengkilap dan memiliki warna hijau tua hingga hitam keunguan.',
        cultivation: 'Tanam di dalam pot dengan campuran tanah yang kaya akan nutrisi dan memiliki drainage yang baik.',
        plant_disease: 'Kutu daun, ulat, dan jamur.',
        prevention: 'Rajin memeriksa dan membersihkan daun serta menghindari over watering dan pengaplikasian pestisida secara berlebihan.',
        difficulty: 'Sedang',
        price: 80000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/anthurium%20crystallium/anthurium%20crystalliun%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/anthurium%20crystallium/anthurium%20crystalliun%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/anthurium%20crystallium/anthurium%20crystalliun%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Lidah mertua',
        species: 'Dracaena trifasciata',
        genus: 'Dracaena',
        ordo: 'Asparagales',
        plant_desc: 'Dracaena trifasciata atau sansevieria adalah tanaman hias dengan daun hijau tua berbentuk pedang dan berwarna hijau kekuningan yang berasal dari Afrika Barat. Tanaman ini tumbuh tegak dan dapat mencapai tinggi 1-2 meter.',
        cultivation: 'Tanam sansevieria dalam pot dengan campuran tanah dan pasir untuk memastikan drainase yang baik. Pastikan tanah tetap lembap dan jangan terlalu sering disiram.',
        plant_disease: 'Tanaman ini rentan terhadap serangan jamur dan bakteri yang menyebabkan penyakit daun busuk.',
        prevention: 'Jaga kebersihan tanaman dan lingkungan sekitarnya, hindari penyiraman yang berlebihan, pastikan tanah cukup drainase dan jangan terlalu sering menyemprotkan air pada daun.',
        difficulty: 'Mudah',
        price: 85000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/dracaena%20trifasciata/dracaena%20trifasciata%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/dracaena%20trifasciata/dracaena%20trifasciata%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/dracaena%20trifasciata/dracaena%20trifasciata%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Mawar Tiongkok',
        species: 'Rosa chinensis',
        genus: 'Rosa',
        ordo: 'Rosales',
        plant_desc: ' Rosa chinensis adalah tanaman semak berbunga yang berasal dari China. Daunnya terdiri dari lima hingga tujuh daun kecil yang halus. Bunga tunggal besar, berdiameter sekitar 8 cm, dengan kelopak bunga merah muda hingga merah dan mahkota bunga kuning pucat hingga putih.',
        cultivation: 'Tanam di tanah yang subur dan drainase yang baik pada kedalaman yang sama dengan pot asal tanaman.',
        plant_disease: 'Busuk akar, bulai daun, dan karat.',
        prevention: 'Tanam di lokasi dengan drainase yang baik, hindari penyiraman berlebihan dan pemupukan yang berlebihan',
        difficulty: 'Sedang',
        price: 550000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/rosa%20chinensis/rosa%20chinensis%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/rosa%20chinensis/rosa%20chinensis%20wide.jpg ',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/rosa%20chinensis/rosa%20chinensis%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        local_name: 'Bunga Matahari',
        species: 'Helianthus annuus',
        genus: 'Helianthus',
        ordo: 'Asterales',
        plant_desc: 'Helianthus annuus adalah tanaman tahunan yang biasanya tumbuh tinggi dengan batang tegak dan daun besar yang berbentuk hati. Bunganya berukuran besar dan memiliki kelopak berwarna kuning cerah dengan pusat cokelat atau hitam yang dikenal sebagai kepala bunga. Bunga matahari dikenal karena kecenderungan bunganya yang selalu menghadap ke arah matahari.',
        cultivation: 'Tanam biji bunga matahari langsung di tempat yang terbuka setelah bahaya embun beku berlalu. Tanam biji pada kedalaman sekitar 2,5 cm dan jaga agar jarak antar tanaman sekitar 45-60 cm.',
        plant_disease: 'Beberapa penyakit yang mungkin menyerang tanaman Helianthus annuus antara lain penyakit jamur seperti embun tepung (powdery mildew) dan layu vertikilium (verticillium wilt).',
        prevention: 'Pencegahan penyakit dapat dilakukan dengan menyediakan sirkulasi udara yang baik di sekitar tanaman, menjaga kelembaban rendah, menghindari overwatering, dan memilih varietas yang tahan terhadap penyakit.',
        difficulty: 'Mudah',
        price: 30000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/helianthus%20annuus/helianthus%20annus%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/helianthus%20annuus/helianthus%20annus%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/helianthus%20annuus/helianthus%20annus%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        local_name: 'Anggrek Bulan',
        species: 'Phalaenopsis amabilis',
        genus: 'Phalaenopsis',
        ordo: 'Asparagales',
        plant_desc: 'Phalaenopsis amabilis adalah anggrek epifitik yang memiliki daun berwarna hijau kebiruan dan bunga yang indah. Bunga-bunga anggrek bulan umumnya berwarna putih dengan lipatan atau bercak berwarna kuning atau merah muda di bagian tengahnya. Anggrek ini terkenal karena keindahan bunga-bunganya yang anggun dan tahan lama.',
        cultivation: 'Phalaenopsis amabilis biasanya ditanam dalam pot dengan campuran media tanam yang terdiri dari serat kayu, potongan kulit pohon, atau sphagnum moss. Pastikan media tanam memiliki drainase yang baik. Anggrek bulan juga membutuhkan cahaya yang cukup, tetapi tidak langsung terkena sinar matahari yang terlalu terik.',
        plant_disease: 'Beberapa penyakit yang mungkin menyerang Phalaenopsis amabilis adalah penyakit layu, busuk akar, atau infeksi jamur seperti embun tepung.',
        prevention: 'Pastikan sirkulasi udara yang baik, hindari kelembaban berlebih, dan hindari penyiraman yang berlebihan untuk mencegah penyakit pada anggrek bulan. Juga, sterilkan peralatan penanaman dan hindari kontaminasi silang antara tanaman.',
        difficulty: 'Mudah',
        price: 50000,
        // gambar tanaman 3 buah
        plant_img_normal: 'https://storage.googleapis.com/plants-img/phalaenopsis%20amabilis/Phalaenopsis%20amabilis%20normal.jpg',
        plant_img_wide: 'https://storage.googleapis.com/plants-img/phalaenopsis%20amabilis/Phalaenopsis%20amabilis%20wide.jpg',
        plant_img_zoom: 'https://storage.googleapis.com/plants-img/phalaenopsis%20amabilis/Phalaenopsis%20amabilis%20zoom.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ]);
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
