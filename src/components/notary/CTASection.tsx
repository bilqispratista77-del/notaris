"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-navy-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 0L40 20L20 40L0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4 block">
          Siap Membantu Anda
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Butuh Bantuan Hukum?
          <br />
          <span className="text-gold-400">Konsultasikan Sekarang</span>
        </h2>
        <p className="text-base sm:text-lg text-navy-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tim kami siap membantu Anda menyelesaikan kebutuhan hukum dengan
          profesional, cepat, dan terpercaya. Konsultasi awal gratis tanpa komitmen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => handleScroll("#kontak")}
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-xl px-8 h-12 text-base shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Konsultasi Sekarang
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              window.open("https://wa.me/6281234567890", "_blank")
            }
            className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold rounded-xl px-8 h-12 text-base bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Hubungi via WhatsApp
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-navy-300 text-xs">
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Konsultasi Gratis
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Respons Cepat
          </span>
          <span className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Tanpa Komitmen
          </span>
        </div>
      </div>
    </section>
  );
}
