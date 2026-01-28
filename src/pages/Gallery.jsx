import React, { useState } from "react";

const GALLERY = [
  {
    id: 1,
    image: "/galeri/FotoStudio.jpeg",
    title: "First Studio Memory",
    desc: "Foto studio sama ayang pertama kali.",
    size: "large",
  },
  {
    id: 2,
    image: "/galeri/CakUut.jpeg",
    title: "Before The Big Day",
    desc: "Makan malam sebelum ayang sempro besoknya.",
    size: "medium",
  },
  {
    id: 3,
    image: "/galeri/Lalapan.jpeg",
    title: "Favorite Sambal",
    desc: "Ayang suka banget sama sambel lalapan ini.",
    size: "small",
  },
  {
    id: 4,
    image: "/galeri/UltahAyang.jpeg",
    title: "Her Special Day",
    desc: "Ayang ulang tahun, ayang suka sama kadonya.",
    size: "medium",
  },
  {
    id: 5,
    image: "/galeri/StarBucks.jpeg",
    title: "After The Surprise",
    desc: "Nongki setelah surprise-in ayang.",
    size: "small",
  },
  {
    id: 6,
    image: "/galeri/Ramen.jpeg",
    title: "Lunch at TP",
    desc: "Makan siang di TP sama ayang.",
    size: "large",
  },
  {
    id: 7,
    image: "/galeri/TemanTeman.jpeg",
    title: "Mirror With Friends",
    desc: "Foto mirror sama teman-teman ayang.",
    size: "small",
  },
  {
    id: 8,
    image: "/galeri/SamaRara.jpeg",
    title: "With Little Sister",
    desc: "Mirror selfie sama adiknya ayang.",
    size: "medium",
  },
  {
    id: 9,
    image: "/galeri/SamaMama.jpeg",
    title: "Family Time",
    desc: "Kita jalan-jalan sama keluarga ayang.",
    size: "medium",
  },
  {
    id: 10,
    image: "/galeri/Susi.jpeg",
    title: "Grill Day",
    desc: "Ayang kita ngegrill dan ayang suka.",
    size: "small",
  },
  {
    id: 11,
    image: "/galeri/UltahAyaang.jpeg",
    title: "His Special Day",
    desc: "Kagetin ayang di hari special nya.",
    size: "large",
  },
];

const GallerySection = () => {
  const [active, setActive] = useState(null);

  // Helper untuk menentukan tinggi card berdasarkan properti 'size'
  const getHeight = (size) => {
    switch (size) {
      case "large":
        return "h-[550px]";
      case "medium":
        return "h-[400px]";
      default:
        return "h-[300px]";
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-32 bg-[#0a0a0c] text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#6b5b3e] blur-[250px] opacity-5 rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
        <p className="uppercase tracking-[0.5em] text-[10px] text-[#d6c28f] mb-4 font-semibold">
          Captured Memories
        </p>
        <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl italic">
          Moments that quietly stay,{" "}
          <span className="text-[#d6c28f]/50">even when time moves on.</span>
        </h2>
      </div>

      {/* DESKTOP MASONRY - Using CSS Columns for true masonry effect */}
      <div className="relative z-10 hidden md:block max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className={`relative break-inside-avoid overflow-hidden rounded-3xl group cursor-pointer border border-white/5 ${getHeight(
                item.size
              )}`}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />

              {/* CONTENT OVERLAY */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent ${
                  active === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-medium text-[#d6c28f] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE SLIDER */}
      <div className="relative z-10 md:hidden px-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10">
          {GALLERY.map((item) => (
            <div
              key={item.id}
              className="snap-center w-[280px] h-[420px] flex-shrink-0 rounded-[2rem] overflow-hidden relative border border-white/10"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-6 flex flex-col justify-end">
                <h3 className="text-lg font-medium text-[#d6c28f]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
