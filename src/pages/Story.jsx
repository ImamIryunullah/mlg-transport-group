import React from "react";

const StorySection = () => {
  return (
    <section
      id="story"
      className="relative bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* 1. LAYERED BACKGROUND TEXT - Dibuat lebih halus & besar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none">
        <h2 className="text-[25rem] font-serif italic opacity-[0.015] leading-none">
          Legacy
        </h2>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-[120vh] items-stretch">
        {/* 2. LEFT SIDE: VISUAL BALANCE */}
        <div className="w-full lg:w-[45%] relative min-h-[600px] lg:min-h-screen group">
          <div className="absolute inset-0 lg:m-12 overflow-hidden rounded-[2rem] lg:rounded-[3rem] border border-white/5">
            <img
              src="/assets/img/5.jpeg"
              alt="Our Story Moment"
              className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110"
            />
            {/* Overlay yang lebih lembut */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c]/80" />
          </div>

          {/* Floating Minimalist Label */}
          <div className="absolute bottom-20 left-20 hidden lg:block overflow-hidden">
            <p className="text-[10px] tracking-[0.8em] uppercase text-[#d6c28f]/50 rotate-90 origin-left translate-y-full group-hover:translate-y-0 transition-transform duration-1000">
              Captured Moment 01
            </p>
          </div>
        </div>

        {/* 3. RIGHT SIDE: THE NARRATIVE - Penambahan Padding & Spacing */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 md:px-20 lg:pl-12 lg:pr-32 py-24 lg:py-0">
          <div className="max-w-2xl">
            {/* Sub-header dengan Line Decor */}
            <div className="flex items-center gap-4 mb-12 animate-fade-in mt-12">
              <div className="h-[1px] w-12 bg-[#d6c28f]/40" />
              <p className="uppercase tracking-[0.8em] text-[10px] text-[#d6c28f] font-semibold">
                Naskah Perjalanan
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-extralight italic leading-[1.1] mb-16 tracking-tight">
              Dua Dunia <br />
              <span className="font-medium not-italic text-[#d6c28f] opacity-90">
                Menjadi Satu Garis.
              </span>
            </h2>

            {/* Paragraph Spacing yang lebih luas */}
            <div className="space-y-12 text-gray-400 font-light leading-[2] text-lg md:text-xl tracking-wide">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#d6c28f] first-letter:mr-3 first-letter:float-left">
                Bagi dunia, mungkin ini hanya pertemuan biasa. Namun bagi kami,
                ini adalah awal dari sebuah narasi yang tidak pernah kami duga
                akan dituliskan. Tidak ada kembang api yang meledak, hanya rasa
                nyaman yang tiba-tiba menetap.
              </p>

              <div className="py-8">
                <blockquote className="relative italic text-[#d6c28f]/80 text-2xl md:text-3xl font-serif leading-relaxed max-w-lg">
                  <span className="absolute -left-8 -top-4 text-6xl text-[#d6c28f]/20 font-serif">
                    "
                  </span>
                  Kami belajar bahwa rasa bukan lahir dari mencari yang
                  sempurna, tapi tentang melihat ketidaksempurnaan dengan cara
                  yang indah.
                </blockquote>
              </div>

              <p>
                Melalui tawa di meja makan sederhana hingga diam yang paling
                tenang, kami menemukan bahwa setiap detik adalah investasi untuk
                masa depan. Ini bukan tentang seberapa cepat kita sampai, tapi
                tentang seberapa jauh kita bersedia melangkah bersama.
              </p>
            </div>

            {/* SIGNATURE - Dibuat lebih luas ke bawah */}
            <div className="mt-24 flex items-center gap-8 group mb-12">
              <div className="flex -space-x-4">
                <div className="w-14 h-14 rounded-full border border-[#d6c28f]/20 bg-[#0a0a0c] flex items-center justify-center font-serif italic text-[#d6c28f] group-hover:scale-110 transition-transform">
                  B
                </div>
                <div className="w-14 h-14 rounded-full border border-[#d6c28f]/20 bg-[#0a0a0c] flex items-center justify-center font-serif italic text-[#d6c28f] group-hover:scale-110 transition-transform delay-75">
                  I
                </div>
              </div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#d6c28f]/30 to-transparent" />
              <p className="font-serif italic text-2xl text-[#d6c28f]/60 tracking-widest">
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
