import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ContentRail from "@/components/ContentRail";
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
        <ContentRail
          title="Recently Added"
          label="New on WorthCast"
          browseHref="/browse"
          limit={6}
        />
        <Categories />
        <WhyWorthCast />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
