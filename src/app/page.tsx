import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directions from "@/components/Directions";
import Methodology from "@/components/Methodology";
import Quiz from "@/components/Quiz";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Rules from "@/components/Rules"; // <-- Добавили
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-white text-brand-black font-sans">
      <Header />
      <Hero />
      <Directions />
      <Methodology />
      <Quiz />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Rules /> {/* <-- Добавили */}
      <Footer />
    </main>
  );
}
