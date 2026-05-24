"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute right-14 top-1/2 -translate-y-1/2 bg-navy-800 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-200 ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat via WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-navy-800" />
      </div>

      <a
        href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20notaris."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
        aria-label="Hubungi via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
