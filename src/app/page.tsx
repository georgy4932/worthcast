import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import TrendingVideos from "@/components/TrendingVideos";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Ticker />
        <TrendingVideos />
        <Categories />
      </main>
    </>
  );
}
