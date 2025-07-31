import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const directors = [
  { name: 'Dr. H. Bambang Subroto', title: 'Komisaris Utama', imgSrc: 'https://placehold.co/128x128.png', hint: 'male headshot' },
  { name: 'Ir. Rina Wulandari, M.Sc.', title: 'Direktur Utama', imgSrc: 'https://placehold.co/128x128.png', hint: 'female headshot' },
  { name: 'Ahmad Prasetyo, S.E.', title: 'Direktur Keuangan', imgSrc: 'https://placehold.co/128x128.png', hint: 'male headshot' },
  { name: 'Siti Hartati, S.T.', title: 'Direktur Operasional', imgSrc: 'https://placehold.co/128x128.png', hint: 'female headshot' },
];

export default function DirectorsSection() {
  return (
    <section id="direksi" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-headline">Dewan Direksi</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Tim kepemimpinan kami yang berdedikasi dan berpengalaman.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director) => (
            <Card key={director.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center pt-6">
                <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                  <AvatarImage src={director.imgSrc} alt={director.name} data-ai-hint={director.hint} />
                  <AvatarFallback>{director.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold text-primary">{director.name}</h3>
                <p className="text-accent-foreground font-medium">{director.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
