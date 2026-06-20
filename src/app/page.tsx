import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import BrandStory from "@/components/BrandStory";
import ProductExplanation from "@/components/ProductExplanation";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-brand-light text-brand-dark">
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <ProductExplanation />
      <Testimonials />
      <Footer />
    </main>
  );
}
