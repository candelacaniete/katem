import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FinalCta } from "@/components/sections/FinalCta";
import { ForWhom } from "@/components/sections/ForWhom";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhyKatem } from "@/components/sections/WhyKatem";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <ForWhom />
        <Process />
        <WhyKatem />
        <Portfolio />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
