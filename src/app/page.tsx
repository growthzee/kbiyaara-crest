import AnnouncementBar from "@/components/announcement-bar";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ResortHighlights from "@/components/resort-highlights";
import SuitesSection from "@/components/suites-section";
import ExperiencesSection from "@/components/experiences-section";
import DiningSection from "@/components/dining-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div
      className="antialiased text-gray-900 selection:bg-emerald-200/60 selection:text-emerald-900 bg-neutral-50"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <ResortHighlights />
      <SuitesSection />
      <ExperiencesSection />
      <DiningSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
