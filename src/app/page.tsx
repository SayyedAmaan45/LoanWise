import ExploreMore from "@/components/exploreMore/ExploreMore";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Pricing from "@/components/pricing/Pricing";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main className="section">
      <HeroSection />
      <ExploreMore />
      <WhyChooseUs />
      <Pricing variant="compact" />
    </main>
  );
}