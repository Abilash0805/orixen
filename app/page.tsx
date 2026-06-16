import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title:
    "Orixen Digital — Web Design, Digital Menus, Study Materials & Tech Support",
  description:
    "Futuristic digital studio crafting blazing-fast websites, QR digital menu cards, study materials, school projects, portfolios, cinematic video edits and on-call tech support. Designing solutions. Creating impact.",
  alternates: {
    canonical: "https://orixendigital.vercel.app",
  },
  openGraph: {
    title:
      "Orixen Digital — Web Design, Digital Menus, Study Materials & Tech Support",
    description:
      "Futuristic digital studio crafting blazing-fast websites, QR digital menu cards, study materials, school projects, portfolios, cinematic video edits and on-call tech support.",
    url: "https://orixendigital.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <article>
          <Hero />
          <About />
          <Services />
          <Showcase />
          <Testimonials />
          <FAQ />
          <Contact />
        </article>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
