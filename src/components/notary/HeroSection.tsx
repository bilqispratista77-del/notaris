"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Kantor Notaris"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/90 via-navy-800/85 to-navy-700/80" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900/60 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-medium text-white/80 tracking-wide">
            Kantor Notaris & PPAT Resmi
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Layanan Notaris & PPAT
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
            Profesional, Aman
          </span>{" "}
          dan
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-300">
            Terpercaya
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Solusi hukum terpercaya untuk kebutuhan akta perjanjian, jual beli tanah,
          pendirian perusahaan, dan layanan notaris lainnya dengan standar profesional tertinggi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => handleScroll("#kontak")}
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl px-8 h-12 text-base shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Konsultasi Hukum
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("#kontak")}
            className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold rounded-xl px-8 h-12 text-base bg-transparent backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Kami
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          {[
            { value: "20+", label: "Tahun Pengalaman" },
            { value: "5.000+", label: "Akta Dibuat" },
            { value: "3.000+", label: "Klien Puas" },
            { value: "99%", label: "Kepuasan Klien" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => handleScroll("#layanan")}
          className="mt-12 inline-flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
          aria-label="Scroll ke bawah"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
