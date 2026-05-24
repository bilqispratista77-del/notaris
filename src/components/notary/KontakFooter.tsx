"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Scale,
  ChevronUp,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    detail: "Jl. Jend. Sudirman Kav. 52-53, Lantai 5",
    subDetail: "Jakarta Selatan 12190, Indonesia",
  },
  {
    icon: Phone,
    title: "Telepon",
    detail: "(021) 555-1234",
    subDetail: "0812-3456-7890 (WhatsApp)",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@notaris-rahmawati.co.id",
    subDetail: "konsultasi@notaris-rahmawati.co.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    detail: "Senin - Jumat: 08.00 - 16.00 WIB",
    subDetail: "Sabtu: 08.00 - 12.00 WIB",
  },
];

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Proses Layanan", href: "#proses" },
  { label: "Artikel", href: "#artikel" },
  { label: "FAQ", href: "#faq" },
];

const layananLinks = [
  "Akta Pendirian PT",
  "Jual Beli Tanah",
  "Akta Perjanjian",
  "Legalisasi Dokumen",
  "Hak Tanggungan",
  "Balik Nama Sertifikat",
];

export function KontakFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Mohon lengkapi data yang diperlukan.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.");
      }
    } catch {
      toast.error("Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="kontak" className="section-padding bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              Hubungi Kami
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-800 mb-4 gold-underline gold-underline-center">
              Konsultasi & Kontak
            </h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto mt-8 leading-relaxed">
              Silakan hubungi kami untuk konsultasi atau informasi lebih lanjut.
              Tim kami siap membantu Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Info + Map */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-navy-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-500 uppercase tracking-wider">
                        {info.title}
                      </p>
                      <p className="text-sm font-medium text-navy-800 mt-0.5">
                        {info.detail}
                      </p>
                      {info.subDetail && (
                        <p className="text-xs text-gray-400 mt-0.5">{info.subDetail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789!2d106.8201234!3d-6.2267890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMzYuNSJTIDEwNsKwNDknMTIuNCJF!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Kantor Notaris"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8">
                <h3 className="text-lg font-bold text-navy-800 mb-1">
                  Form Konsultasi
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Isi form berikut untuk konsultasi awal. Kami akan merespons dalam 1x24 jam.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-navy-700">
                        Nama Lengkap <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Nama lengkap Anda"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-gray-50 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-navy-700">
                        No. Telepon / WhatsApp <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        placeholder="08xx-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-gray-50 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20 rounded-lg h-11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-navy-700">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@contoh.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-gray-50 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20 rounded-lg h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium text-navy-700">
                        Layanan yang Dibutuhkan
                      </Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full h-11 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-navy-700 focus:outline-none focus:border-gold-400 focus:ring-gold-400/20"
                      >
                        <option value="">Pilih layanan...</option>
                        <option value="pendirian-pt">Akta Pendirian PT</option>
                        <option value="perubahan-ad">Perubahan Anggaran Dasar</option>
                        <option value="akta-perjanjian">Akta Perjanjian</option>
                        <option value="legalisasi">Legalisasi Dokumen</option>
                        <option value="jual-beli-tanah">Jual Beli Tanah</option>
                        <option value="hibah-tanah">Hibah Tanah</option>
                        <option value="balik-nama">Balik Nama Sertifikat</option>
                        <option value="hak-tanggungan">Hak Tanggungan</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-navy-700">
                      Pesan / Pertanyaan <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-gray-50 border-gray-200 focus:border-gold-400 focus:ring-gold-400/20 rounded-lg min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-700 hover:bg-navy-800 text-white font-semibold rounded-xl h-11 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Kirim Pesan
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    * Data Anda dijamin kerahasiaannya dan tidak akan disebarluaskan.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-tight">
                    Notaris & PPAT
                  </span>
                  <span className="text-[10px] font-medium tracking-wider uppercase text-gold-400">
                    Dr. Hj. Siti Rahmawati
                  </span>
                </div>
              </div>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Kantor Notaris & PPAT profesional yang melayani pembuatan akta,
                jual beli tanah, dan berbagai kebutuhan hukum lainnya.
              </p>
              <div className="flex items-center gap-2 text-xs text-navy-400">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Terdaftar & Terpercaya
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Navigasi</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layanan */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Layanan</h4>
              <ul className="space-y-2.5">
                {layananLinks.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-navy-300">{link}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Mini */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Kontak</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-navy-300">
                    Jl. Jend. Sudirman Kav. 52-53
                    <br />
                    Jakarta Selatan 12190
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-sm text-navy-300">(021) 555-1234</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-sm text-navy-300">info@notaris-rahmawati.co.id</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span className="text-sm text-navy-300">Sen - Jum: 08:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-navy-400">
              © {new Date().getFullYear()} Kantor Notaris & PPAT Dr. Hj. Siti Rahmawati, S.H., M.Kn. Hak Cipta Dilindungi.
            </p>
            <p className="text-xs text-navy-500">
              Dibuat dengan dedikasi untuk pelayanan hukum terbaik
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-navy-700 hover:bg-navy-600 text-white shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label="Kembali ke atas"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </>
  );
}
