import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./Content/Hero";
import WhyChooseUs from "./Content/WhyChooseUs";
import ArmadaSection from "./Content/ArmadaSection";
const Home = () => {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <Navbar />

      <div className="relative z-10 flex-1 flex flex-col">
        <HeroSection />
        <WhyChooseUs />
        <ArmadaSection />
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 items-center opacity-30 pointer-events-none">
        <div className="w-[2px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="rotate-90 text-[10px] tracking-[0.2em] uppercase text-white">
          Scroll
        </div>
      </div>
    </main>
  );
};

export default Home;
