import ExploreMore from "@/components/home/exploreMore/ExploreMore";
import Footer from "@/components/layout/footer/Footer";
import HeroSection from "@/components/home/hero/HeroSection";
import Pricing from "@/components/home/pricing/Pricing";
import WhyChooseUs from "@/components/home/whyChooseUs/WhyChooseUs";

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