import React from 'react';

export interface Product {
  slug: string;
  title: React.ReactNode;
  description: string;
  detailedDescription: string;
  imgSrc: string;
  hint: string;
}

export const productCategories: { [key: string]: Product[] } = {
  'Microsurfacing': [
    { 
      slug: 'microsurfacing-ch-15',
      title: <>Microsurfacing CH-15&trade;</>, 
      description: 'Lapisan tipis untuk preservasi jalan dengan lalu lintas rendah, menjaga keawetan permukaan jalan.', 
      detailedDescription: 'Microsurfacing CH-15™ adalah campuran aspal emulsi polimer yang dirancang khusus untuk jalan dengan volume lalu lintas ringan hingga sedang. Produk ini efektif untuk mengisi retak-retak kecil, memperbaiki kerusakan permukaan, dan memberikan lapisan aus baru yang tahan lama, sehingga memperpanjang umur jalan dan meningkatkan keselamatan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'road paving' 
    },
    { 
      slug: 'microsurfacing-ch-17',
      title: <>Microsurfacing CH-17&trade;</>, 
      description: 'Solusi ideal untuk jalan dengan volume lalu lintas sedang, meningkatkan daya tahan dan kenyamanan berkendara.',
      detailedDescription: 'Microsurfacing CH-17™ menawarkan keseimbangan sempurna antara biaya dan kinerja untuk jalan-jalan kolektor dan arteri sekunder. Dengan agregat yang sedikit lebih besar dari CH-15, produk ini memberikan tekstur permukaan yang lebih baik, meningkatkan ketahanan slip, dan secara signifikan meningkatkan daya tahan terhadap deformasi akibat lalu lintas sedang.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'road construction' 
    },
    { 
      slug: 'microsurfacing-ch-19',
      title: <>Microsurfacing CH-19&trade;</>, 
      description: 'Memberikan perlindungan maksimal untuk jalan raya dan arteri utama dengan lalu lintas padat.',
      detailedDescription: 'Dirancang untuk jalan raya, jalan tol, dan arteri utama dengan volume lalu lintas tinggi, Microsurfacing CH-19™ menggunakan agregat berkualitas tinggi dan emulsi polimer yang dimodifikasi secara khusus. Hasilnya adalah lapisan permukaan yang sangat kuat, tahan terhadap alur (rutting), dan mampu menahan beban berat, memastikan kinerja jangka panjang di bawah kondisi paling berat sekalipun.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'highway maintenance' 
    },
    { 
      slug: 'microsurfacing-ch-21',
      title: <>Microsurfacing CH-21&trade;</>, 
      description: 'Diformulasikan khusus untuk kondisi cuaca ekstrem dan beban berat, seperti pada area industri.',
      detailedDescription: 'Microsurfacing CH-21™ adalah solusi heavy-duty yang diformulasikan untuk area dengan beban sangat berat dan kondisi ekstrem, seperti kawasan industri, pelabuhan, dan area pergudangan. Campuran ini memiliki ketahanan superior terhadap tumpahan bahan kimia, beban statis yang berat, dan lalu lintas kendaraan lambat yang berbelok tajam.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'heavy duty road' 
    },
    { 
      slug: 'microsurfacing-ch-23',
      title: <>Microsurfacing CH-23&trade;</>, 
      description: 'Pilihan premium untuk proyek yang membutuhkan presisi tinggi seperti landasan pacu bandara dan sirkuit balap.',
      detailedDescription: 'Untuk aplikasi yang menuntut presisi dan kinerja tertinggi, Microsurfacing CH-23™ adalah jawabannya. Produk ini digunakan pada landasan pacu bandara, taxiway, dan sirkuit balap, di mana permukaan yang sangat rata, daya cengkeram tinggi, dan ketahanan terhadap gaya geser ekstrem sangat penting. Formulanya memastikan pengeringan cepat untuk meminimalkan waktu penutupan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'airport runway' 
    },
  ],
  'Coldmix': [
    { 
      slug: 'coldmix',
      title: 'Coldmix', 
      description: 'Campuran aspal dingin siap pakai untuk perbaikan jalan yang cepat dan efisien tanpa perlu pemanasan.',
      detailedDescription: 'Coldmix adalah campuran aspal dingin yang praktis dan serbaguna, dirancang untuk perbaikan jalan yang cepat dan mudah. Dapat digunakan dalam berbagai kondisi cuaca, produk ini sangat ideal untuk menambal lubang, memperbaiki retakan, dan meratakan permukaan jalan tanpa memerlukan peralatan pemanas yang mahal. Cukup tuang, ratakan, dan padatkan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'asphalt repair' 
    },
    { 
      slug: 'coldmix-ch-24',
      title: <>Coldmix CH-24&trade;</>, 
      description: 'Campuran aspal dingin premium untuk perbaikan cepat pada jalan dengan lalu lintas sedang.',
      detailedDescription: 'Coldmix CH-24™ adalah solusi perbaikan jalan yang efisien untuk area dengan lalu lintas sedang. Diformulasikan untuk kekuatan dan daya tahan yang lebih baik, produk ini memungkinkan perbaikan lubang dan retakan yang cepat dan tahan lama, bahkan dalam kondisi cuaca yang kurang ideal.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'asphalt patch' 
    },
    { 
      slug: 'coldmix-ch-28',
      title: <>Coldmix CH-28&trade;</>, 
      description: 'Solusi aspal dingin heavy-duty untuk perbaikan area industri dan jalan dengan lalu lintas berat.',
      detailedDescription: 'Coldmix CH-28™ dirancang khusus untuk menangani beban berat dan lalu lintas padat. Sebagai solusi perbaikan yang sangat kuat, produk ini ideal untuk jalan raya, kawasan industri, dan area lain yang membutuhkan daya tahan ekstra tanpa proses pemanasan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'industrial asphalt' 
    },
  ],
  'Ecobeton': [
    { 
      slug: 'ecobeton',
      title: 'Ecobeton', 
      description: 'Solusi beton ramah lingkungan dengan kekuatan superior dan jejak karbon rendah untuk konstruksi berkelanjutan.',
      detailedDescription: 'Ecobeton adalah inovasi dalam teknologi beton yang ramah lingkungan. Dengan menggunakan bahan baku daur ulang dan aditif khusus, produk ini secara signifikan mengurangi jejak karbon dibandingkan beton konvensional, sambil tetap memberikan kekuatan, daya tahan, dan kemudahan kerja yang superior. Pilihan tepat untuk proyek bangunan hijau dan konstruksi berkelanjutan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'eco concrete' 
    },
  ],
  'Sabda Seal': [
    { 
      slug: 'sabda-seal',
      title: 'Sabda Seal', 
      description: 'Pelapis kedap air berkualitas tinggi untuk melindungi atap, dinding, dan area basah dari kebocoran.',
      detailedDescription: 'Sabda Seal adalah pelapis waterproofing berbasis polimer fleksibel yang memberikan perlindungan handal terhadap kebocoran. Mudah diaplikasikan dengan kuas atau roller, produk ini membentuk lapisan membran yang elastis, tahan cuaca, dan tahan sinar UV. Ideal untuk atap beton, dak, balkon, kamar mandi, dan area basah lainnya.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'waterproofing seal' 
    },
  ],
  'Produk Spesial': [
    { 
      slug: 'atomized-microseal',
      title: 'Atomized Microseal', 
      description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal terhadap cuaca dan abrasi.',
      detailedDescription: 'Atomized Microseal adalah pelapis pelindung ultra-tipis yang diaplikasikan dengan teknologi atomisasi. Produk ini menembus ke dalam pori-pori permukaan beton atau aspal, menciptakan penghalang yang sangat tahan terhadap air, minyak, dan abrasi. Ini secara signifikan memperpanjang umur permukaan sambil mempertahankan penampilan aslinya.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'surface protection' 
    },
    { 
      slug: 'coldplast',
      title: 'Coldplast', 
      description: 'Material perkerasan dingin termoplastik untuk marka jalan, area parkir, dan zona pejalan kaki.',
      detailedDescription: 'Coldplast adalah material marka jalan dua komponen yang diaplikasikan dingin, memberikan daya tahan dan visibilitas yang luar biasa. Tidak seperti termoplastik panas, produk ini tidak memerlukan pemanasan, sehingga lebih aman dan lebih cepat diaplikasikan. Ideal untuk zebra cross, garis berhenti, dan simbol marka jalan lainnya.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'road marking' 
    },
    { 
      slug: 'sami-waterproofing',
      title: 'SAMI Waterproofing', 
      description: 'Sistem membran interlayer penyerap stres untuk waterproofing jalan dan jembatan.',
      detailedDescription: 'SAMI (Stress Absorbing Membrane Interlayer) adalah sistem waterproofing canggih untuk perkerasan aspal, terutama pada jembatan. Ini berfungsi sebagai lapisan peredam stres dan penghalang air antara lapisan pondasi dan lapisan permukaan, mencegah retak reflektif dan kerusakan akibat penetrasi air, sehingga memperpanjang umur infrastruktur secara signifikan.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'waterproofing membrane' 
    },
    { 
      slug: 'coating',
      title: 'Coating', 
      description: 'Berbagai jenis pelapis pelindung industrial untuk daya tahan ekstra pada beton dan baja.',
      detailedDescription: 'Kami menyediakan berbagai solusi coating industrial, termasuk epoxy, polyurethane, dan polyurea, yang dirancang untuk melindungi permukaan beton dan baja dari korosi, abrasi, bahan kimia, dan benturan. Aplikasi meliputi lantai pabrik, area parkir, tangki penyimpanan, dan struktur baja, memberikan hasil akhir yang tahan lama dan estetis.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'protective coating' 
    },
    { 
      slug: 'geone',
      title: 'Geone', 
      description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah pada proyek konstruksi.',
      detailedDescription: 'Geone adalah rangkaian produk geosintetik kami, termasuk geotekstil, geogrid, dan geokomposit. Produk-produk ini digunakan dalam aplikasi teknik sipil untuk perkuatan tanah, stabilisasi lereng, drainase bawah permukaan, dan filtrasi. Geone membantu meningkatkan kinerja struktur tanah dan mengurangi biaya konstruksi.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'geosynthetics material' 
    },
    { 
      slug: 'marka-jalan',
      title: 'Marka Jalan', 
      description: 'Cat marka jalan termoplastik dan coldplastic berkualitas tinggi untuk visibilitas dan keselamatan.',
      detailedDescription: 'Kami menawarkan solusi lengkap untuk marka jalan, termasuk cat termoplastik yang diaplikasikan panas dan cat coldplastic. Kedua jenis produk ini memberikan retroreflektivitas tinggi untuk visibilitas malam hari, daya tahan yang sangat baik, dan waktu pengeringan yang cepat untuk meminimalkan gangguan lalu lintas. Tersedia dalam berbagai warna sesuai standar.',
      imgSrc: 'https://placehold.co/600x400.png', 
      hint: 'road paint' 
    },
  ]
};

export const allProducts: Product[] = Object.values(productCategories).flat();

export const getProductBySlug = (slug: string): Product | undefined => {
  return allProducts.find(p => p.slug === slug);
}
