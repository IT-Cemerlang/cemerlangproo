import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const products = [
  { title: 'Konstruksi Gedung', description: 'Pembangunan gedung komersial dan residensial dengan standar kualitas tertinggi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'building construction' },
  { title: 'Infrastruktur Jalan', description: 'Proyek pembangunan jalan tol dan jembatan untuk konektivitas yang lebih baik.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road infrastructure' },
  { title: 'Energi Terbarukan', description: 'Solusi energi bersih dan berkelanjutan melalui proyek panel surya dan tenaga angin.', imgSrc: 'https://placehold.co/600x400.png', hint: 'renewable energy' },
  { title: 'Manajemen Properti', description: 'Layanan pengelolaan properti profesional untuk memaksimalkan nilai investasi Anda.', imgSrc: 'https://placehold.co/600x400.png', hint: 'property management' },
];

export default function ProductsSection() {
  return (
    <section id="produk" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Produk &amp; Layanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                  <Image src={product.imgSrc} alt={product.title} fill className="object-cover" data-ai-hint={product.hint} />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 text-primary">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
