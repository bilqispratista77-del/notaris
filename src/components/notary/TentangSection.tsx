"use client";

import Image from "next/image";
import {
  Award,
  GraduationCap,
  Briefcase,
  MapPin,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

const pendidikan = [
  "S1 Ilmu Hukum — Universitas Indonesia",
  "S2 Kenotariatan — Universitas Gadjah Mada",
  "S3 Ilmu Hukum — Universitas Airlangga",
];

const keanggotaan = [
  { label: "INI", desc: "Ikatan Notaris Indonesia" },
  { label: "IPPAT", desc: "Ikatan Pejabat Pembuat Akta Tanah" },
];

const nilai = [
  { icon: Shield, text: "Integritas & Etika Tinggi" },
  { icon: Award, text: "Profesional & Kompeten" },
  { icon: Briefcase, text: "Berpengalaman 20+ Tahun" },
  { icon: CheckCircle, text: "Akurat & Teliti" },
];

export function TentangSection() {
  return (
    <section id="tentang" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Profil Notaris
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Tentang Kami
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Mengenal lebih dekat notaris yang akan menangani kebutuhan hukum Anda
            dengan profesional dan terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo & Profile */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Professional Photo */}
            <div className="relative mb-8 w-full max-w-sm mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-navy-100 shadow-lg">
                <Image
                  src="/images/notaris-portrait.png"
                  alt="Dr. Hj. Siti Rahmawati, S.H., M.Kn."
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gold accent decoration */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-gold-300 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-gold-200 rounded-xl -z-10" />
            </div>

            {/* SK & Anggota */}
            <div className="w-full max-w-sm mx-auto space-y-4">
              <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">SK Pengangkatan</p>
                <p className="text-sm font-semibold text-navy-800">
                  SK Menteri Hukum dan HAM RI
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  No. AHU-00001.AH.01.01.Tahun 2010
                </p>
              </div>

              <div className="flex gap-3">
                {keanggotaan.map((item) => (
                  <div
                    key={item.label}
                    className="flex-1 bg-gold-50 rounded-xl p-4 border border-gold-200 text-center"
                  >
                    <p className="text-base font-bold text-gold-600">{item.label}</p>
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-800 mb-1">
                Dr. Hj. Siti Rahmawati, S.H., M.Kn.
              </h3>
              <p className="text-gold-600 font-semibold text-sm">
                Notaris & Pejabat Pembuat Akta Tanah (PPAT)
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-[15px]">
              Dr. Hj. Siti Rahmawati, S.H., M.Kn. adalah seorang notaris dan PPAT
              berpengalaman yang telah melayani masyarakat selama lebih dari 20 tahun.
              Dengan latar belakang pendidikan hukum terbaik dan komitmen terhadap
              profesionalisme, beliau telah menangani ribuan akta dan dokumen hukum
              dengan tingkat akurasi dan kepuasan yang sangat tinggi.
            </p>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Berdedikasi dalam memberikan pelayanan hukum yang terbaik, cepat, dan
              terpercaya. Setiap dokumen ditangani dengan teliti dan sesuai standar
              hukum yang berlaku, memastikan keamanan dan kenyamanan klien.
            </p>

            {/* Wilayah Kerja */}
            <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <MapPin className="w-5 h-5 text-navy-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-navy-700">Wilayah Kerja</p>
                <p className="text-sm text-gray-500 mt-1">
                  Kota Jakarta Selatan, Jakarta Pusat, Jakarta Barat, dan sekitarnya
                </p>
              </div>
            </div>

            {/* Pendidikan */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-navy-500" />
                <h4 className="text-sm font-semibold text-navy-700">Pendidikan</h4>
              </div>
              <div className="space-y-3">
                {pendidikan.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nilai Profesional */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-navy-500" />
                <h4 className="text-sm font-semibold text-navy-700">Nilai Profesional</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {nilai.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2.5 bg-navy-50/50 rounded-lg px-3 py-2.5"
                  >
                    <item.icon className="w-4 h-4 text-gold-600 shrink-0" />
                    <span className="text-sm text-navy-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
