"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pengusaha",
    rating: 5,
    review:
      "Pelayanan yang sangat profesional dan cepat. Akta pendirian PT saya selesai dalam waktu yang tepat. Sangat puas dengan hasilnya.",
  },
  {
    name: "Anita Wijaya",
    role: "Investor Properti",
    rating: 5,
    review:
      "Proses jual beli tanah berjalan lancar dan aman. Ibu Notaris sangat teliti dan menjelaskan setiap detail dengan sabar.",
  },
  {
    name: "Drs. Ahmad Hidayat, M.M.",
    role: "Direktur PT Maju Bersama",
    rating: 5,
    review:
      "Sudah beberapa kali menggunakan jasa Notaris ini untuk perubahan anggaran dasar. Selalu memberikan pelayanan terbaik dan hasil yang memuaskan.",
  },
  {
    name: "Siti Nurhaliza, S.E.",
    role: "Pemilik Bisnis",
    rating: 5,
    review:
      "Kantor notaris yang sangat terpercaya. Semua dokumen dijaga kerahasiaannya. Prosesnya transparan tanpa biaya tersembunyi.",
  },
  {
    name: "Ir. Hendra Kurniawan",
    role: "Developer Perumahan",
    rating: 5,
    review:
      "Pengalaman bekerja sama yang sangat menyenangkan. Proses hak tanggungan dan balik nama sertifikat ditangani dengan cepat dan akurat.",
  },
  {
    name: "Rina Marlina, A.Md.",
    role: "Wiraswasta",
    rating: 5,
    review:
      "Konsultasi awal sangat membantu. Ibu Notaris menjelaskan segala hal dengan bahasa yang mudah dipahami. Sangat merekomendasikan.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "fill-gold-400 text-gold-400" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimoniSection() {
  return (
    <section id="testimoni" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Testimoni
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Apa Kata Klien Kami
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Kepuasan dan kepercayaan klien adalah prioritas utama kami.
            Berikut testimoni dari beberapa klien yang telah menggunakan layanan kami.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="border-gray-100 bg-white hover:shadow-lg hover:border-gold-200 transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-6">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold-200" />
                </div>

                {/* Review */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  &ldquo;{item.review}&rdquo;
                </p>

                {/* Rating */}
                <StarRating rating={item.rating} />

                {/* Author */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-navy-600">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
