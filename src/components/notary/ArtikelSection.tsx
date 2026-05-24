"use client";

import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    category: "Pendirian Usaha",
    title: "Cara Mendirikan PT: Panduan Lengkap untuk Pemula",
    excerpt:
      "Panduan langkah demi langkah untuk mendirikan Perseroan Terbatas, mulai dari persyaratan dokumen hingga proses pengesahan.",
    date: "15 Jan 2025",
    readTime: "8 menit",
  },
  {
    category: "Hukum Tanah",
    title: "Proses Jual Beli Tanah yang Sah Secara Hukum",
    excerpt:
      "Memahami tahapan lengkap jual beli tanah melalui PPAT, termasuk pemeriksaan sertifikat dan perhitungan biaya.",
    date: "10 Jan 2025",
    readTime: "6 menit",
  },
  {
    category: "Biaya & Prosedur",
    title: "Estimasi Biaya Notaris: Apa yang Perlu Anda Ketahui",
    excerpt:
      "Informasi lengkap mengenai besaran biaya jasa notaris untuk berbagai jenis layanan dan faktor yang mempengaruhi.",
    date: "5 Jan 2025",
    readTime: "5 menit",
  },
  {
    category: "Edukasi Hukum",
    title: "Fungsi dan Kedudukan Akta Notaris dalam Hukum",
    excerpt:
      "Penjelasan mengenai kekuatan hukum akta notaris dan perannya sebagai alat bukti yang kuat di pengadilan.",
    date: "28 Des 2024",
    readTime: "7 menit",
  },
];

const categoryColors: Record<string, string> = {
  "Pendirian Usaha": "bg-navy-100 text-navy-700",
  "Hukum Tanah": "bg-green-50 text-green-700",
  "Biaya & Prosedur": "bg-gold-100 text-gold-700",
  "Edukasi Hukum": "bg-purple-50 text-purple-700",
};

export function ArtikelSection() {
  return (
    <section id="artikel" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Artikel & Edukasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Informasi Hukum Terkini
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Artikel edukatif seputar hukum, notaris, dan pertanahan untuk membantu
            Anda memahami berbagai aspek legal.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group border-gray-100 bg-white hover:shadow-lg hover:border-gold-200 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Top colored bar */}
              <div className="h-1 bg-gradient-to-r from-navy-700 to-navy-500" />
              <CardContent className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                      categoryColors[article.category] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 group-hover:text-gold-700 transition-colors">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
