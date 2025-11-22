'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
    {
      title: "Solusi Terdepan untuk Jalan yang Tangguh",
      subtitle: "Teknologi modern dan strategi berkelanjutan demi infrastruktur yang aman dan tahan lama."
    },
    {
      title: "Inovasi Pemeliharaan Jalan Masa Kini",
      subtitle: "Menggabungkan efisiensi, kualitas, dan keberlanjutan untuk mendukung mobilitas nasional."
    },
    {
      title: "Infrastruktur Jalan Berkualitas, Mobilitas Tanpa Hambatan",
      subtitle: "Layanan pemeliharaan terintegrasi untuk memastikan kelancaran transportasi setiap hari."
    },
    {
      title: "Dari Perawatan ke Peningkatan",
      subtitle: "Solusi proaktif menjaga jalan tetap prima sekaligus meningkatkan nilai infrastruktur."
    },
    {
      title: "Jalan Kuat, Ekonomi Maju",
      subtitle: "Pemeliharaan infrastruktur sebagai fondasi pertumbuhan dan konektivitas daerah."
    },
    {
      title: "Smart Road Maintenance",
      subtitle: "Sistem digital dan analitik cerdas untuk pemeliharaan jalan yang lebih efektif."
    },
    {
      title: "Menjaga Jalan, Menjaga Keselamatan",
      subtitle: "Solusi pemeliharaan yang berfokus pada keamanan pengguna dan kualitas perjalanan."
    },
    {
      title: "Infrastruktur Jalan Berkelanjutan",
      subtitle: "Material ramah lingkungan dan metode inovatif untuk masa depan transportasi hijau."
    },
    {
      title: "Solusi Terintegrasi untuk Pemeliharaan Jalan",
      subtitle: "Dari inspeksi hingga perbaikan, semua dalam satu sistem terpadu."
    },
    {
      title: "Jalan Prima, Mobilitas Optimal",
      subtitle: "Layanan pemeliharaan yang memastikan kenyamanan dan efisiensi perjalanan Anda."
    }
  ];

export default function HeroSection() {
  return (
    <section id="beranda" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="https://i.ibb.co/hxYpV9Cz/hero-section-beranda.png"
        alt="Hero background"
        fill
        priority
        className="object-cover z-0"
        data-ai-hint="winding road"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="container mx-auto px-4 md:px-6 text-center z-20">
        <Carousel
            opts={{
                align: 'start',
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-headline animate-fade-in-down" style={{animationDelay: '0.2s'}}>
                        {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        {slide.subtitle}
                    </p>
                </div>
              </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#produk">Lihat Produk Kami</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <a href="#kontak">Hubungi Kami</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
