"use client";

import {
  MessageSquare,
  FolderOpen,
  SearchCheck,
  FilePenLine,
  PenTool,
  HandshakeIcon,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Konsultasi Awal",
    description:
      "Diskusi awal untuk memahami kebutuhan dan menjelaskan proses yang akan dilakukan.",
  },
  {
    number: "02",
    icon: FolderOpen,
    title: "Pengumpulan Dokumen",
    description:
      "Pengumpulan dan pemeriksaan dokumen yang diperlukan untuk proses pembuatan akta.",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "Verifikasi Data",
    description:
      "Proses verifikasi data dan dokumen untuk memastikan keabsahan semua informasi.",
  },
  {
    number: "04",
    icon: FilePenLine,
    title: "Penyusunan Akta",
    description:
      "Penyusunan akta oleh notaris sesuai ketentuan hukum yang berlaku.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "Penandatanganan",
    description:
      "Proses penandatanganan akta oleh para pihak dengan pengawasan notaris.",
  },
  {
    number: "06",
    icon: HandshakeIcon,
    title: "Penyerahan Dokumen",
    description:
      "Penyerahan dokumen asli yang telah sah kepada para pihak yang berkepentingan.",
  },
];

export function ProsesSection() {
  return (
    <section id="proses" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Alur Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Proses Layanan Kami
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Setiap proses dilakukan secara sistematis dan transparan untuk memastikan
            kepastian hukum bagi Anda.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-300 via-gold-200 to-gray-200" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-start gap-4 sm:gap-8">
                {/* Timeline node - desktop */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-gold-200 shadow-sm items-center justify-center z-10">
                  <step.icon className="w-7 h-7 text-gold-600" />
                </div>

                {/* Mobile number + icon */}
                <div className="sm:hidden flex shrink-0 w-12 h-12 rounded-xl bg-white border border-gold-200 shadow-sm items-center justify-center">
                  <step.icon className="w-5 h-5 text-gold-600" />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-white rounded-xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-gold-200 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gold-500 bg-gold-50 px-2.5 py-1 rounded-md">
                      Langkah {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-navy-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
