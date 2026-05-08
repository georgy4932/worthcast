import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import VideoGrid from "@/components/VideoGrid";
import Categories from "@/components/Categories";
import WhyWorthCast from "@/components/WhyWorthCast";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <VideoGrid />
        <Categories />
        <WhyWorthCast />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
