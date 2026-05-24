"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Artikel", href: "#artikel" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#beranda");
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-navy-700 flex items-center justify-center group-hover:bg-navy-600 transition-colors">
              <Scale className="w-5 h-5 text-gold-400" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-sm font-bold leading-tight transition-colors",
                isScrolled ? "text-navy-700" : "text-white"
              )}>
                Notaris & PPAT
              </span>
              <span className={cn(
                "text-[10px] font-medium tracking-wider uppercase transition-colors",
                isScrolled ? "text-gold-600" : "text-gold-300"
              )}>
                Dr. Hj. Siti Rahmawati
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-3 py-2 text-[13px] font-medium rounded-md transition-colors hover:bg-white/10",
                  isScrolled
                    ? "text-navy-600 hover:text-navy-800 hover:bg-navy-50"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => handleNavClick("#kontak")}
              className="ml-3 bg-gold-500 hover:bg-gold-600 text-white text-[13px] font-semibold rounded-lg px-5 h-9"
            >
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-navy-700" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-navy-700" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-4 animate-in slide-in-from-top-2 fade-in duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-navy-900 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => handleNavClick("#kontak")}
                className="mt-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg w-full"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
