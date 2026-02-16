import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Service from "@/sections/Service";
import Testimonials from "@/sections/Testimonials";
import TopCareGivers from "@/sections/TopCareGivers";
import HowItWorks from "@/sections/HowItWorks";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero></Hero>

      {/* Abut us section */}
      <About></About>

      {/* Services Section */}
      <Service></Service>

      {/* Testimonials Section */}
      <Testimonials></Testimonials>

      {/* Top Caregivers Section */}
      <TopCareGivers></TopCareGivers>

      {/* How It Works Section */}
      <HowItWorks></HowItWorks>
      {/* FAQ Section */}
      <FAQ></FAQ>

      {/* Join as a Caregiver CTA Section */}

      <CTA></CTA>
      {/* Footer */}
      <Footer />
     
    </>
  );
}
