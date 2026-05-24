"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Berapa biaya jasa notaris?",
    answer:
      "Biaya jasa notaris bervariasi tergantung jenis layanan yang dibutuhkan. Untuk pembuatan akta pendirian PT, biaya mulai dari Rp 3.000.000 - Rp 5.000.000. Untuk jual beli tanah, biaya dihitung berdasarkan Nilai Objek Pajak (NOP). Kami memberikan estimasi biaya yang transparan sebelum proses dimulai tanpa biaya tersembunyi.",
  },
  {
    question: "Berapa lama proses pembuatan akta?",
    answer:
      "Waktu pengerjaan tergantung jenis layanan. Untuk akta pendirian PT, proses biasanya memakan waktu 3-5 hari kerja. Untuk akta jual beli tanah melalui PPAT, proses sekitar 1-2 minggu. Kami berusaha menyelesaikan setiap dokumen secepat mungkin tanpa mengurangi kualitas.",
  },
  {
    question: "Apakah bisa konsultasi secara online?",
    answer:
      "Ya, kami menyediakan layanan konsultasi online melalui WhatsApp, telepon, atau video call untuk tahap konsultasi awal. Namun, untuk proses penandatanganan akta, para pihak harus hadir secara fisik di kantor notaris sesuai ketentuan hukum.",
  },
  {
    question: "Dokumen apa saja yang diperlukan?",
    answer:
      "Dokumen yang diperlukan berbeda-beda tergantung jenis layanan. Secara umum, Anda perlu menyiapkan: KTP, Kartu Keluarga, dan NPWP. Untuk layanan tertentu seperti pendirian PT, diperlukan dokumen tambahan seperti akta pendirian, NIB, dan sertifikat tanah. Kami akan menginformasikan dokumen lengkap saat konsultasi awal.",
  },
  {
    question: "Apakah data dan dokumen saya aman?",
    answer:
      "Keamanan dan kerahasiaan dokumen klien adalah prioritas utama kami. Semua dokumen disimpan dalam brankas yang aman dan dijaga ketat. Kami menerapkan sistem keamanan berlapis dan hanya notaris serta staf berwenang yang dapat mengakses dokumen klien, sesuai dengan ketentuan UU Jabatan Notaris.",
  },
  {
    question: "Apa bedanya Notaris dan PPAT?",
    answer:
      "Notaris berwenang membuat akta otentik untuk berbagai peristiwa hukum seperti pendirian perusahaan, perjanjian, dan wasiat. Sementara PPAT (Pejabat Pembuat Akta Tanah) khusus berwenang membuat akta yang berkaitan dengan hak atas tanah seperti jual beli, tukar-menukar, dan hibah tanah. Kami memiliki kedua kewenangan tersebut.",
  },
  {
    question: "Apakah melayani wilayah di luar Jakarta?",
    answer:
      "Wilayah kerja kami meliputi Jakarta Selatan, Jakarta Pusat, dan Jakarta Barat. Untuk kebutuhan di wilayah lain, silakan hubungi kami untuk diskusi lebih lanjut. Kami juga dapat membantu mengarahkan Anda ke rekan notaris di wilayah yang Anda butuhkan.",
  },
  {
    question: "Bagaimana cara membuat janji konsultasi?",
    answer:
      "Anda dapat membuat janji konsultasi melalui beberapa cara: menghubungi kami via WhatsApp di nomor 0812-3456-7890, telepon ke (021) 555-1234, mengirim email ke info@notaris-rahmawati.co.id, atau mengisi form kontak di website ini. Tim kami akan merespons dan menjadwalkan konsultasi sesuai waktu yang Anda inginkan.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Pertanyaan Umum
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai
            layanan notaris dan PPAT kami.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-100 rounded-xl px-6 data-[state=open]:border-gold-200 data-[state=open]:bg-gold-50/30 data-[state=open]:shadow-sm transition-all duration-200"
            >
              <AccordionTrigger className="text-sm sm:text-[15px] font-semibold text-navy-800 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
