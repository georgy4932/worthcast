import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrendingVideos from "@/components/TrendingVideos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <TrendingVideos />
      </main>
    </>
  );
}
