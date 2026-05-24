import { Navbar } from "@/components/notary/Navbar";
import { HeroSection } from "@/components/notary/HeroSection";
import { LayananSection } from "@/components/notary/LayananSection";
import { TentangSection } from "@/components/notary/TentangSection";
import { KeunggulanSection } from "@/components/notary/KeunggulanSection";
import { ProsesSection } from "@/components/notary/ProsesSection";
import { TestimoniSection } from "@/components/notary/TestimoniSection";
import { ArtikelSection } from "@/components/notary/ArtikelSection";
import { FAQSection } from "@/components/notary/FAQSection";
import { CTASection } from "@/components/notary/CTASection";
import { KontakFooter } from "@/components/notary/KontakFooter";
import { WhatsAppButton } from "@/components/notary/WhatsAppButton";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LayananSection />
      <TentangSection />
      <KeunggulanSection />
      <ProsesSection />
      <TestimoniSection />
      <ArtikelSection />
      <FAQSection />
      <CTASection />
      <KontakFooter />
      <WhatsAppButton />
    </main>
  );
}
