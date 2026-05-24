"use client";

import {
  Award,
  Eye,
  Lock,
  Zap,
  FileCheck,
  Clock,
} from "lucide-react";

const keunggulan = [
  {
    icon: Award,
    title: "Profesional & Berpengalaman",
    description:
      "Lebih dari 20 tahun pengalaman menangani berbagai kebutuhan hukum dengan standar profesional tertinggi.",
  },
  {
    icon: Eye,
    title: "Proses Transparan",
    description:
      "Setiap tahapan proses dijelaskan secara detail dan transparan kepada klien tanpa biaya tersembunyi.",
  },
  {
    icon: Lock,
    title: "Dokumen Aman & Rahasia",
    description:
      "Menjamin kerahasiaan dan keamanan setiap dokumen klien sesuai standar etika notaris.",
  },
  {
    icon: Zap,
    title: "Pelayanan Cepat",
    description:
      "Proses penyelesaian dokumen secara efisien tanpa mengurangi kualitas dan ketelitian.",
  },
  {
    icon: FileCheck,
    title: "Legalitas Lengkap",
    description:
      "Setiap dokumen disusun sesuai peraturan perundang-undangan yang berlaku di Indonesia.",
  },
  {
    icon: Clock,
    title: "Fleksibel & Responsif",
    description:
      "Siap melayani dengan jadwal fleksibel dan respons cepat untuk kebutuhan mendesak Anda.",
  },
];

export function KeunggulanSection() {
  return (
    <section id="keunggulan" className="section-padding bg-navy-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-700/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-3 block">
            Mengapa Memilih Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Keunggulan Layanan Kami
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6 rounded-full" />
          <p className="text-base text-navy-200 max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen memberikan layanan notaris terbaik dengan mengutamakan
            profesionalisme, keamanan, dan kepuasan klien.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keunggulan.map((item) => (
            <div
              key={item.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 group-hover:bg-gold-500/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-navy-200 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
