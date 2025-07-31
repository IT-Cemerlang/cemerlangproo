import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 md:py-24 relative overflow-hidden bg-primary">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-white">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Siap Membangun Bersama Kami?</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Hubungi kami hari ini untuk mendiskusikan proyek Anda berikutnya. Tim kami siap membantu mewujudkan visi Anda menjadi kenyataan.
                    </p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                            <span>Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, Indonesia</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                            <span>(021) 1234 5678</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                            <span>kontak@cemerlang.co.id</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Card className="w-full max-w-md p-8 shadow-2xl">
                        <CardContent className="flex flex-col items-center text-center p-0">
                            <div className="p-4 bg-accent/20 rounded-full mb-4">
                                <Share2 className="w-12 h-12 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2">Terhubung dengan Kami</h3>
                            <p className="text-muted-foreground mb-6">Ikuti kami di media sosial untuk mendapatkan pembaruan terbaru.</p>
                            <div className="flex justify-center gap-4">
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="Twitter">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.823 3.027 2.071 3.868-.766-.024-1.483-.234-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.2 4.34 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.06 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>
                                    </Link>
                                </Button>
                                <Button size="icon" variant="outline" asChild>
                                    <Link href="#" aria-label="LinkedIn">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.002 1.808-4.012 3.998-4.012 2.189 0 4.002 1.77 4.002 4.012v8.396h4.98v-10.396c0-5.522-4.478-10-10-10-5.522 0-10 4.478-10 10z"/></svg>
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}
