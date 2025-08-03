import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const activities = [
  { title: 'Audiensi di Dinas PUPR Kota Bogor', imgSrc: 'https://placehold.co/600x400.png', hint: 'official meeting' },
  { title: 'Audiensi di Dinas PUPR Kota Tangerang', imgSrc: 'https://placehold.co/600x400.png', hint: 'government building' },
  { title: 'Audiensi di Dinas PUPR DKI Jakarta', imgSrc: 'https://placehold.co/600x400.png', hint: 'city hall' },
  { title: 'Audiensi di Kementerian PUPR Pusat Jakarta', imgSrc: 'https://placehold.co/600x400.png', hint: 'ministry building' },
  { title: 'Mock Up Microsurfacing di Tol Becakayu', imgSrc: 'https://placehold.co/600x400.png', hint: 'road work' },
  { title: 'Mock Up di Revo Mall Kota Bekasi', imgSrc: 'https://placehold.co/600x400.png', hint: 'shopping mall' },
  { title: 'Mock Up di Pelabuhan Patimbang Subang', imgSrc: 'https://placehold.co/600x400.png', hint: 'seaport' },
  { title: 'Audiensi di Dinas PUPR Kota Sawahlunto', imgSrc: 'https://placehold.co/600x400.png', hint: 'official discussion' },
];

export default function ActivitiesSection() {
  return (
    <section id="kegiatan" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Blog &amp; Kegiatan</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Dokumentasi kegiatan dan audiensi yang telah kami lakukan.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {activities.map((activity) => (
            <Card key={activity.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <div className="relative w-full h-48">
                    <Image src={activity.imgSrc} alt={activity.title} fill className="object-cover" data-ai-hint={activity.hint}/>
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex items-center">
                <CardTitle className="text-lg text-primary text-center w-full">{activity.title}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
