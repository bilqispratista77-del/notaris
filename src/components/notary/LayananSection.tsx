"use client";

import {
  FileText,
  Building2,
  FileCheck,
  Stamp,
  ShieldCheck,
  LandPlot,
  Gift,
  RotateCcw,
  Lock,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const layananNotaris = [
  {
    icon: Building2,
    title: "Akta Pendirian PT",
    description:
      "Pembuatan akta pendirian perseroan terbatas sesuai peraturan hukum yang berlaku dengan proses cepat dan akurat.",
  },
  {
    icon: FileCheck,
    title: "Perubahan Anggaran Dasar",
    description:
      "Penyusunan akta perubahan anggaran dasar perusahaan untuk menyesuaikan dengan kebutuhan bisnis.",
  },
  {
    icon: FileText,
    title: "Akta Perjanjian",
    description:
      "Pembuatan berbagai akta perjanjian kerjasama, sewa-menyewa, jual beli, dan perjanjian lainnya.",
  },
  {
    icon: Stamp,
    title: "Legalisasi Dokumen",
    description:
      "Layanan legalisasi dokumen resmi untuk keperluan administratif dan hukum di dalam maupun luar negeri.",
  },
  {
    icon: ShieldCheck,
    title: "Waarmerking",
    description:
      "Pengesahan tanda tangan pada dokumen agar memiliki kekuatan hukum yang sah di mata hukum.",
  },
];

const layananPPAT = [
  {
    icon: LandPlot,
    title: "Jual Beli Tanah",
    description:
      "Pembuatan akta jual beli tanah dan bangunan dengan proses yang aman dan sesuai hukum pertanahan.",
  },
  {
    icon: Gift,
    title: "Hibah Tanah",
    description:
      "Pembuatan akta hibah pemberian hak atas tanah antar pihak dengan prosedur yang benar dan sah.",
  },
  {
    icon: RotateCcw,
    title: "Balik Nama Sertifikat",
    description:
      "Pelayanan proses balik nama sertifikat tanah untuk perpindahan hak kepemilikan secara hukum.",
  },
  {
    icon: Lock,
    title: "Hak Tanggungan",
    description:
      "Pembuatan akta pemberian hak tanggungan sebagai jaminan kredit di lembaga keuangan.",
  },
  {
    icon: Layers,
    title: "Pembagian Hak Bersama",
    description:
      "Penyusunan akta pembagian hak bersama atas tanah untuk keperluan waris atau perjanjian bersama.",
  },
];

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="group border-gray-100 bg-white hover:border-gold-200 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300 rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-gold-50 flex items-center justify-center mb-4 transition-colors duration-300">
          <Icon className="w-6 h-6 text-navy-600 group-hover:text-gold-600 transition-colors duration-300" />
        </div>
        <h3 className="text-base font-semibold text-navy-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function LayananSection() {
  return (
    <section id="layanan" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Layanan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Layanan Notaris & PPAT
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Kami menyediakan berbagai layanan hukum yang komprehensif dan profesional
            untuk memenuhi kebutuhan legal Anda.
          </p>
        </div>

        {/* Layanan Notaris */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-gold-500 to-gold-400" />
            <h3 className="text-xl font-bold text-navy-800">Layanan Notaris</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {layananNotaris.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        {/* Layanan PPAT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-gold-500 to-gold-400" />
            <h3 className="text-xl font-bold text-navy-800">Layanan PPAT</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {layananPPAT.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
