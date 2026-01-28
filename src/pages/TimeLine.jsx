import React from "react";

const TIMELINE = [
  {
    year: "Mei, 2025",
    title: "Where It Started",
    desc: "Semua dimulai dari pertemuan sederhana, tanpa rencana panjang. Tapi dari sana, semuanya pelan-pelan berubah.",
  },
  {
    year: "July, 2025",
    title: "Getting Used to Each Other",
    desc: "Belajar memahami kebiasaan, diam, dan tawa. Tidak selalu mudah, tapi selalu jujur.",
  },
  {
    year: "August, 2025",
    title: "Becoming a Safe Place",
    desc: "Rumah bukan lagi soal tempat, tapi tentang siapa yang ada di samping.",
  },
  {
    year: "December, 2025",
    title: "Growing Together",
    desc: "Lebih banyak cerita, lebih banyak rencana, lebih banyak alasan untuk bertahan.",
  },
  {
    year: "Now",
    title: "Still Choosing Each Other",
    desc: "Setiap hari adalah pilihan. Dan sejauh ini, kita selalu memilih untuk tetap.",
  },
];

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="relative py-32 bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* AMBIENT LIGHT */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#6b5b3e] blur-[250px] opacity-5 rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="uppercase tracking-[0.6em] text-[10px] text-[#d6c28f] mb-6 font-semibold">
              The Chronology
            </p>
            <h2 className="text-4xl md:text-6xl font-extralight italic leading-[1.1]">
              A Journey Written <br />
              <span className="font-medium not-italic text-[#d6c28f]/80">
                in Every Heartbeat.
              </span>
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-500 max-w-sm text-sm font-light leading-relaxed border-l border-[#d6c28f]/20 pl-6">
              Waktu hanyalah angka, namun cerita di dalamnya adalah apa yang
              membuat kita merasa hidup.
            </p>
          </div>
        </div>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="group relative grid md:grid-cols-12 gap-0 md:gap-10 pb-20 md:pb-32 last:pb-0"
            >
              {/* YEAR COLUMN (DESKTOP) */}
              <div className="hidden md:flex md:col-span-3 justify-end pt-2">
                <span className="text-sm tracking-[0.4em] text-[#d6c28f]/40 group-hover:text-[#d6c28f] transition-colors duration-500 uppercase font-light">
                  {item.year}
                </span>
              </div>

              {/* CENTER ACCENT (DESKTOP) */}
              <div className="hidden md:flex md:col-span-1 justify-center relative">
                <div className="h-full w-[1px] bg-gradient-to-b from-[#d6c28f]/40 via-[#d6c28f]/10 to-transparent absolute top-0" />
                <div className="sticky top-1/2 w-2 h-2 rounded-full bg-[#d6c28f] shadow-[0_0_15px_#d6c28f] z-10" />
              </div>

              {/* CONTENT COLUMN */}
              <div className="md:col-span-8 relative">
                {/* MOBILE YEAR INDICATOR */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-[#d6c28f]" />
                  <span className="text-[10px] tracking-[0.4em] text-[#d6c28f] uppercase">
                    {item.year}
                  </span>
                </div>

                <div className="relative overflow-hidden transition-all duration-700">
                  <h3 className="text-2xl md:text-4xl font-light mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-loose text-base md:text-lg max-w-2xl">
                    {item.desc}
                  </p>

                  {/* HOVER UNDERLINE EFFECT */}
                  <div className="mt-8 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-[#d6c28f]/30 to-transparent transition-all duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DECORATIVE ELEMENT */}
      <div className="absolute bottom-10 right-10 rotate-90 hidden md:block">
        <p className="text-[10px] tracking-[0.8em] text-white/10 uppercase select-none">
          Forever & Always
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
