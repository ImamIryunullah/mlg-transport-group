import React from "react";
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0c] text-white flex flex-col">
      {/* LUXURY BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a1a23,transparent)]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#6b5b3e] blur-[160px] opacity-[0.05] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#2a3142] blur-[160px] opacity-[0.08] rounded-full pointer-events-none" />

      <Navbar />

      <div className="relative z-10 flex-grow flex flex-col justify-center container mx-auto px-6 pt-32 pb-20">
        {/* TEXT CONTENT */}
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block overflow-hidden mb-8">
            <p className="uppercase tracking-[0.8em] text-[10px] md:text-xs text-[#d6c28f] font-light animate-fade-in-up">
              Antologi Rasa & Waktu
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-extralight tracking-tight leading-[1.1] mb-10">
            <span className="block italic opacity-90 drop-shadow-2xl font-serif">
              A Place for
            </span>
            <span className="flex items-center justify-center gap-6 my-4">
              <span className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#d6c28f]/40 inline-block"></span>
              <span className="text-[#d6c28f] font-medium tracking-[0.2em] text-3xl md:text-6xl uppercase">
                Eternal
              </span>
              <span className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#d6c28f]/40 inline-block"></span>
            </span>
            <span className="block font-light italic opacity-90 font-serif lowercase">
              Memories.
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed mb-16 tracking-widest px-4 opacity-70">
            Sebuah ruang sunyi untuk menyimpan cerita. Tentang setiap detik yang
            berharga, dan segala hal kecil yang ingin kita dekap selamanya.
          </p>

          <div className="flex justify-center">
            <button className="group relative overflow-hidden border border-[#d6c28f]/20 px-12 py-5 rounded-full transition-all duration-700 hover:border-[#d6c28f]">
              <span className="relative z-10 text-[10px] tracking-[0.4em] font-light group-hover:text-black transition-colors duration-500 uppercase">
                Menyusuri Kisah
              </span>
              <div className="absolute inset-0 bg-[#d6c28f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </div>
        </div>

        {/* VISUAL ELEMENTS - Tetap Dipertahankan karena memberikan 'Soul' pada Hero */}
        <div className="hidden md:flex mt-28 justify-center items-center gap-16">
          <div className="group relative w-48 h-72 rounded-full overflow-hidden border border-white/5 transition-all duration-1000 opacity-30 hover:opacity-100 hover:scale-105">
            <img
              src="/assets/img/2.jpeg"
              className="w-full h-full object-cover grayscale"
              alt="Visual 1"
            />
          </div>

          <div className="group relative w-72 h-[450px] rounded-t-full overflow-hidden border border-[#d6c28f]/20 z-20 shadow-2xl transition-all duration-1000">
            <img
              src="/assets/img/1.jpeg"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
              alt="Visual 2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-40" />
          </div>

          <div className="group relative w-48 h-72 rounded-full overflow-hidden border border-white/5 transition-all duration-1000 opacity-30 hover:opacity-100 hover:scale-105">
            <img
              src="/assets/img/3.jpeg"
              className="w-full h-full object-cover grayscale"
              alt="Visual 3"
            />
          </div>
        </div>

        {/* MOBILE VISUAL */}
        <div className="mt-16 md:hidden px-8">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden border border-[#d6c28f]/20">
            <img
              src="/assets/img/1.jpeg"
              className="w-full h-full object-cover"
              alt="Moment"
            />
          </div>
        </div>
      </div>

      {/* FOOTER DECORATION */}
      <div className="hidden md:flex absolute bottom-12 left-12 items-center gap-6 opacity-20">
        <span
          className="text-[10px] tracking-[0.6em] uppercase vertical-text transform rotate-180"
          style={{ writingMode: "vertical-rl" }}
        >
          The Anthology
        </span>
        <div className="h-16 w-[1px] bg-white" />
      </div>
    </section>
  );
};

export default HeroSection;
