'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils';

const productCategories = {
  'Microsurfacing': [
    { title: <>Microsurfacing CH-15<sup>&trade;</sup></>, description: 'Lapisan tipis untuk preservasi jalan dengan lalu lintas rendah, menjaga keawetan permukaan jalan.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paving' },
    { title: <>Microsurfacing CH-17<sup>&trade;</sup></>, description: 'Solusi ideal untuk jalan dengan volume lalu lintas sedang, meningkatkan daya tahan dan kenyamanan berkendara.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road construction' },
    { title: <>Microsurfacing CH-19<sup>&trade;</sup></>, description: 'Memberikan perlindungan maksimal untuk jalan raya dan arteri utama dengan lalu lintas padat.', imgSrc: 'https://placehold.co/600x400.png', hint: 'highway maintenance' },
    { title: <>Microsurfacing CH-21<sup>&trade;</sup></>, description: 'Diformulasikan khusus untuk kondisi cuaca ekstrem dan beban berat, seperti pada area industri.', imgSrc: 'https://placehold.co/600x400.png', hint: 'heavy duty road' },
    { title: <>Microsurfacing CH-23<sup>&trade;</sup></>, description: 'Pilihan premium untuk proyek yang membutuhkan presisi tinggi seperti landasan pacu bandara dan sirkuit balap.', imgSrc: 'https://placehold.co/600x400.png', hint: 'airport runway' },
  ],
  'Coldmix': [
    { title: 'Coldmix', description: 'Campuran aspal dingin siap pakai untuk perbaikan jalan yang cepat dan efisien tanpa perlu pemanasan.', imgSrc: 'https://placehold.co/600x400.png', hint: 'asphalt repair' },
  ],
  'Ecobeton': [
    { title: 'Ecobeton', description: 'Solusi beton ramah lingkungan dengan kekuatan superior dan jejak karbon rendah untuk konstruksi berkelanjutan.', imgSrc: 'https://placehold.co/600x400.png', hint: 'eco concrete' },
  ],
  'Sabda Seal': [
    { title: 'Sabda Seal', description: 'Pelapis kedap air berkualitas tinggi untuk melindungi atap, dinding, dan area basah dari kebocoran.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing seal' },
  ],
  'Produk Spesial': [
    { title: 'Atomized Microseal', description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal terhadap cuaca dan abrasi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'surface protection' },
    { title: 'Coldplast', description: 'Material perkerasan dingin termoplastik untuk marka jalan, area parkir, dan zona pejalan kaki.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road marking' },
    { title: 'SAMI Waterproofing', description: 'Sistem membran interlayer penyerap stres untuk waterproofing jalan dan jembatan.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing membrane' },
    { title: 'Coating', description: 'Berbagai jenis pelapis pelindung industrial untuk daya tahan ekstra pada beton dan baja.', imgSrc: 'https://placehold.co/600x400.png', hint: 'protective coating' },
    { title: 'Geone', description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah pada proyek konstruksi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'geosynthetics material' },
    { title: 'Marka Jalan', description: 'Cat marka jalan termoplastik dan coldplastic berkualitas tinggi untuk visibilitas dan keselamatan.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paint' },
  ]
};

const allProducts = Object.values(productCategories).flat();

// A simple type guard for our product titles
function isReactElement(value: any): value is React.ReactElement {
    return value && typeof value === 'object' && 'props' in value;
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('Semua');

  const productsToShow = activeTab === 'Semua' ? allProducts : productCategories[activeTab as keyof typeof productCategories] || [];

  return (
    <section id="produk" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Produk &amp; Layanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.</p>
        </div>

        <Tabs defaultValue="Semua" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="Semua">Semua</TabsTrigger>
            {Object.keys(productCategories).map(category => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {productsToShow.map((product, index) => (
                <Card key={isReactElement(product.title) ? `product-${index}` : product.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48">
                      <Image src={product.imgSrc} alt={isReactElement(product.title) ? `Image for product ${index}` : product.title} fill className="object-cover" data-ai-hint={product.hint} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-primary">{product.title}</CardTitle>
                    <CardDescription className="text-justify">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
