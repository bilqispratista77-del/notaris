import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kantor Notaris & PPAT Dr. Hj. Siti Rahmawati, S.H., M.Kn.",
  description:
    "Layanan Notaris dan Pejabat Pembuat Akta Tanah (PPAT) profesional, aman, dan terpercaya. Melayani pembuatan akta, jual beli tanah, pendirian PT, legalisasi dokumen, dan konsultasi hukum.",
  keywords: [
    "notaris",
    "PPAT",
    "jasa notaris",
    "akta notaris",
    "jual beli tanah",
    "pendirian PT",
    "legalisasi dokumen",
    "waarmerking",
    "balik nama sertifikat",
    "konsultasi hukum",
  ],
  authors: [{ name: "Kantor Notaris & PPAT Dr. Hj. Siti Rahmawati, S.H., M.Kn." }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/images/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Kantor Notaris & PPAT Dr. Hj. Siti Rahmawati, S.H., M.Kn.",
    description:
      "Layanan Notaris dan PPAT profesional, aman, dan terpercaya untuk kebutuhan hukum Anda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased font-sans bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
