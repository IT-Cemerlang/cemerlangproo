import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const products = [
  { title: 'Microsurfacing', description: 'Lapisan tipis untuk pemeliharaan permukaan jalan yang aus.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paving' },
  { title: 'Coldmix', description: 'Campuran aspal dingin untuk perbaikan jalan yang praktis dan cepat.', imgSrc: 'https://placehold.co/600x400.png', hint: 'asphalt repair' },
  { title: 'Ecobeton', description: 'Solusi beton ramah lingkungan dengan performa tinggi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'eco concrete' },
  { title: 'Sabda Seal', description: 'Pelapis kedap air berkualitas untuk berbagai aplikasi konstruksi.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing seal' },
  { title: 'Atomized Microseal', description: 'Teknologi microseal teratomisasi untuk proteksi permukaan maksimal.', imgSrc: 'https://placehold.co/600x400.png', hint: 'surface protection' },
  { title: 'SAMI Waterproofing', description: 'Sistem membran interlayer penyerap stres untuk waterproofing.', imgSrc: 'https://placehold.co/600x400.png', hint: 'waterproofing membrane' },
  { title: 'Coating', description: 'Berbagai jenis pelapis pelindung untuk daya tahan ekstra.', imgSrc: 'https://placehold.co/600x400.png', hint: 'protective coating' },
  { title: 'Coldplast', description: 'Material perkerasan dingin untuk aplikasi marka jalan dan lainnya.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road marking' },
  { title: 'Geone', description: 'Produk geosintetik untuk stabilisasi dan perkuatan tanah.', imgSrc: 'https://placehold.co/600x400.png', hint: 'geosynthetics material' },
  { title: 'Marka Jalan', description: 'Cat marka jalan berkualitas tinggi untuk keselamatan lalu lintas.', imgSrc: 'https://placehold.co/600x400.png', hint: 'road paint' },
];

export default function ProductsSection() {
  return (
    <section id="produk" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Produk &amp; Layanan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Menawarkan beragam solusi inovatif untuk memenuhi kebutuhan Anda.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
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
        </div>
      </div>
    </section>
  );
}
