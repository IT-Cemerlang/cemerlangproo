'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  en: {
    navBeranda: 'Home',
    navTentangKami: 'About Us',
    navDireksi: 'Directors',
    navProduk: 'Products',
    navLisensi: 'Licenses',
    navProyek: 'Projects',
    navKlien: 'Clients',
    navKegiatan: 'Activities',
    navKontak: 'Contact',
    hubungiKami: 'Contact Us',
    heroTitle1: 'Leading Solutions for Resilient Roads',
    heroSubtitle1: 'Modern technology and sustainable strategies for safe and durable infrastructure.',
    heroTitle2: 'The Latest in Road Maintenance Innovation',
    heroSubtitle2: 'Combining efficiency, quality, and sustainability to support national mobility.',
    heroTitle3: 'Quality Road Infrastructure, Seamless Mobility',
    heroSubtitle3: 'Integrated maintenance services to ensure smooth daily transportation.',
    heroTitle4: 'From Maintenance to Enhancement',
    heroSubtitle4: 'Proactive solutions to keep roads in prime condition while increasing infrastructure value.',
    heroTitle5: 'Strong Roads, Stronger Economy',
    heroSubtitle5: 'Infrastructure maintenance as the foundation for regional growth and connectivity.',
    heroTitle6: 'Smart Road Maintenance',
    heroSubtitle6: 'Digital systems and intelligent analytics for more effective road maintenance.',
    heroTitle7: 'Maintaining Roads, Ensuring Safety',
    heroSubtitle7: 'Maintenance solutions focused on user safety and travel quality.',
    heroTitle8: 'Sustainable Road Infrastructure',
    heroSubtitle8: 'Eco-friendly materials and innovative methods for the future of green transportation.',
    heroTitle9: 'Integrated Solutions for Road Maintenance',
    heroSubtitle9: 'From inspection to repair, all in one integrated system.',
    heroTitle10: 'Prime Roads, Optimal Mobility',
    heroSubtitle10: 'Maintenance services that ensure your comfort and travel efficiency.',
    lihatProdukKami: 'See Our Products',
    tentangKamiTitle: 'About Us',
    tentangKamiDesc1: 'Cemerlang Group is a leading company dedicated to excellence and innovation. Since our establishment, we have built a solid reputation for providing high-quality solutions across various sectors, especially in road infrastructure and construction materials.',
    tentangKamiDesc2: 'Our vision is to be a trusted partner in building a sustainable future. With an experienced team of experts, we continue to push the boundaries of possibility to create value for our clients, society, and all stakeholders.',
    tentangKamiDesc3: 'We believe the foundation of any great project is quality materials and uncompromising integrity. Therefore, we are committed to providing superior products that not only meet but exceed industry standards.',
    direksiTitle: 'Board of Directors',
    direksiSubtitle: 'Our dedicated and experienced leadership team.',
    produkTitle: 'Products & Services',
    produkSubtitle: 'Offering a variety of innovative solutions to meet your needs.',
    semua: 'All',
    lisensiTitle: 'Product Licenses',
    lisensiSubtitle: 'Our products have been tested and certified by various leading institutions.',
    proyekTitle: 'Our Projects',
    proyekSubtitle: 'A portfolio of projects that demonstrates our commitment to quality and excellence.',
    klienTitle: 'Our Clients',
    klienSubtitle: 'Trusted by various leading companies and institutions in Indonesia.',
    kegiatanTitle: 'Blog & Activities',
    kegiatanSubtitle: 'Documentation of activities and audiences we have conducted.',
    selengkapnya: 'Read More',
    kegiatanNotFound: 'Activity not found.',
    kembaliKeKegiatan: 'Back to Activities',
    produkNotFound: 'Product not found.',
    kembaliKeProduk: 'Back to Products',
    kontakTitle: 'Ready to Build With Us?',
    kontakSubtitle: 'Contact us today to discuss your next project. Our team is ready to help turn your vision into reality.',
    alamat: 'PLAZA MEBEL #31-35 Jl. RS Fatmawati Kav 5, Cipete Utara, Kebayoran Baru, RT.1/RW.2, Gandaria Selatan, RT.1/RW.2, Gandaria Sel., Kec. Cilandak, South Jakarta City, Special Capital Region of Jakarta 12420 - Indonesia',
    terhubungDenganKami: 'Connect with Us',
    terhubungSubtitle: 'Follow us on social media for the latest updates.',
    footerText: '© {year} Cemerlang Group. All rights reserved.',
    hubungiViaWa: 'Contact Us on WhatsApp',
  },
  id: {
    navBeranda: 'Beranda',
    navTentangKami: 'Tentang Kami',
    navDireksi: 'Direksi',
    navProduk: 'Produk',
    navLisensi: 'Lisensi',
    navProyek: 'Proyek',
    navKlien: 'Klien',
    navKegiatan: 'Kegiatan',
    navKontak: 'Kontak',
    hubungiKami: 'Hubungi Kami',
    heroTitle1: 'Solusi Terdepan untuk Jalan yang Tangguh',
    heroSubtitle1: 'Teknologi modern dan strategi berkelanjutan demi infrastruktur yang aman dan tahan lama.',
    heroTitle2: 'Inovasi Pemeliharaan Jalan Masa Kini',
    heroSubtitle2: 'Menggabungkan efisiensi, kualitas, dan keberlanjutan untuk mendukung mobilitas nasional.',
    heroTitle3: 'Infrastruktur Jalan Berkualitas, Mobilitas Tanpa Hambatan',
    heroSubtitle3: 'Layanan pemeliharaan terintegrasi untuk memastikan kelancaran transportasi setiap hari.',
    heroTitle4: 'Dari Perawatan ke Peningkatan',
    heroSubtitle4: 'Solusi proaktif menjaga jalan tetap prima sekaligus meningkatkan nilai infrastruktur.',
    heroTitle5: 'Jalan Kuat, Ekonomi Maju',
    heroSubtitle5: 'Pemeliharaan infrastruktur sebagai fondasi pertumbuhan dan konektivitas daerah.',
    heroTitle6: 'Smart Road Maintenance',
    heroSubtitle6: 'Sistem digital dan analitik cerdas untuk pemeliharaan jalan yang lebih efektif.',
    heroTitle7: 'Menjaga Jalan, Menjaga Keselamatan',
    heroSubtitle7: 'Solusi pemeliharaan yang berfokus pada keamanan pengguna dan kualitas perjalanan.',
    heroTitle8: 'Infrastruktur Jalan Berkelanjutan',
    heroSubtitle8: 'Material ramah lingkungan dan metode inovatif untuk masa depan transportasi hijau.',
    heroTitle9: 'Solusi Terintegrasi untuk Pemeliharaan Jalan',
    heroSubtitle9: 'Dari inspeksi hingga perbaikan, semua dalam satu sistem terpadu.',
    heroTitle10: 'Jalan Prima, Mobilitas Optimal',
    heroSubtitle10: 'Layanan pemeliharaan yang memastikan kenyamanan dan efisiensi perjalanan Anda.',
    lihatProdukKami: 'Lihat Produk Kami',
    tentangKamiTitle: 'Tentang Kami',
    tentangKamiDesc1: 'Cemerlang Group adalah perusahaan terdepan yang berdedikasi pada keunggulan dan inovasi. Sejak didirikan, kami telah membangun reputasi yang kokoh dalam memberikan solusi berkualitas tinggi di berbagai sektor, khususnya dalam bidang infrastruktur jalan dan material konstruksi.',
    tentangKamiDesc2: 'Visi kami adalah menjadi mitra terpercaya dalam pembangunan masa depan yang berkelanjutan. Dengan tim ahli yang berpengalaman, kami terus mendorong batas-batas kemungkinan untuk menciptakan nilai bagi klien, masyarakat, dan seluruh pemangku kepentingan.',
    tentangKamiDesc3: 'Kami percaya bahwa fondasi dari setiap proyek besar adalah material berkualitas dan integritas tanpa kompromi. Oleh karena itu, kami berkomitmen untuk menyediakan produk-produk unggulan yang tidak hanya memenuhi, tetapi juga melampaui standar industri.',
    direksiTitle: 'Dewan Direksi',
    direksiSubtitle: 'Tim kepemimpinan kami yang berdedikasi dan berpengalaman.',
    produkTitle: 'Produk & Layanan',
    produkSubtitle: 'Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.',
    semua: 'Semua',
    lisensiTitle: 'Lisensi Produk',
    lisensiSubtitle: 'Produk kami telah teruji dan disertifikasi oleh berbagai lembaga terkemuka.',
    proyekTitle: 'Proyek Kami',
    proyekSubtitle: 'Portofolio proyek yang menunjukkan komitmen kami pada kualitas dan keunggulan.',
    klienTitle: 'Klien Kami',
    klienSubtitle: 'Dipercaya oleh berbagai perusahaan dan institusi terkemuka di Indonesia.',
    kegiatanTitle: 'Blog & Kegiatan',
    kegiatanSubtitle: 'Dokumentasi kegiatan dan audiensi yang telah kami lakukan.',
    selengkapnya: 'Selengkapnya',
    kegiatanNotFound: 'Kegiatan tidak ditemukan.',
    kembaliKeKegiatan: 'Kembali ke Kegiatan',
    produkNotFound: 'Produk tidak ditemukan.',
    kembaliKeProduk: 'Kembali ke Produk',
    kontakTitle: 'Siap Membangun Bersama Kami?',
    kontakSubtitle: 'Hubungi kami hari ini untuk mendiskusikan proyek Anda berikutnya. Tim kami siap membantu mewujudkan visi Anda menjadi kenyataan.',
    alamat: 'PLAZA MEBEL #31-35 Jl. RS Fatmawati Kav 5, Cipete Utara, Kebayoran Baru, RT.1/RW.2, Gandaria Selatan, RT.1/RW.2, Gandaria Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12420 - Indonesia',
    terhubungDenganKami: 'Terhubung dengan Kami',
    terhubungSubtitle: 'Ikuti kami di media sosial untuk mendapatkan pembaruan terbaru.',
    footerText: '© {year} Cemerlang Group. All rights reserved.',
    hubungiViaWa: 'Hubungi Kami',
  },
};

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations['en'][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
