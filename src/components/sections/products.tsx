'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from '@/lib/utils';

const productCategories = {
  'Microsurfacing': [
    { title: 'Microsurfacing', description: 'Lapisan tipis untuk pemeliharaan permukaan jalan yang aus.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paving' },
    { title: 'Atomized Microseal', description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal.', imgSrc: 'https://placehold.co/600x400.png', hint: 'surface protection' },
  ],
  'Coldmix': [
    { title: 'Coldmix', description: 'Campuran aspal dingin untuk perbaikan jalan yang praktis dan cepat.', imgSrc: 'https://placehold.co/600x400.png', hint: 'asphalt repair' },
    { title: 'Coldplast', description: 'Material perkerasan dingin untuk aplikasi marka jalan dan lainnya.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road marking' },
  ],
  'Ecobeton': [
    { title: 'Ecobeton', description: 'Solusi beton ramah lingkungan dengan performa tinggi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'eco concrete' },
  ],
  'Sabda Seal': [
    { title: 'Sabda Seal', description: 'Pelapis kedap air berkualitas untuk berbagai aplikasi konstruksi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing seal' },
    { title: 'SAMI Waterproofing', description: 'Sistem membran interlayer penyerap stres untuk waterproofing.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing membrane' },
  ],
  'Produk Spesial': [
    { title: 'Coating', description: 'Berbagai jenis pelapis pelindung untuk daya tahan ekstra.', imgSrc: 'https://placehold.co/600x400.png', hint: 'protective coating' },
    { title: 'Geone', description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah.', imgSrc: 'https://placehold.co/600x400.png', hint: 'geosynthetics material' },
    { title: 'Marka Jalan', description: 'Cat marka jalan berkualitas tinggi untuk keselamatan lalu lintas.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paint' },
  ]
};

const allProducts = Object.values(productCategories).flat();

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

          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            >
              {productsToShow.map((product) => (
                <Card key={product.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48">
                      <Image src={product.imgSrc} alt={product.title} fill className="object-cover" data-ai-hint={product.hint} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-primary">{product.title}</CardTitle>
                    <CardDescription className="text-justify">{product.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}

// Dummy components for animation
const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const motion = {
  div: ({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => <div {...props}>{children}</div>
};
