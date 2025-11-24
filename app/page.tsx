import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProcessSection from "@/components/process-section"
import StatsSection from "@/components/stats-section"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
    </div>
  )
}
