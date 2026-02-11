import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const vehicles = [
  {
    id: 1,
    name: "TOYOTA INNOVA REBORN",
    description:
      "MPV premium dengan kabin lega dan suspensi empuk. Sangat cocok untuk perjalanan bisnis, keluarga besar, maupun perjalanan luar kota dengan kenyamanan maksimal.",
    price: "RP 500.000 / 24 JAM",
    image: "/cars/innova.png",
    bgText: "INNOVA",
  },
  {
    id: 2,
    name: "HONDA HR-V 2022",
    description:
      "SUV modern dengan desain sporty dan kabin nyaman. Cocok untuk perjalanan dalam kota Malang maupun luar kota dengan efisiensi bahan bakar yang baik dan handling yang stabil.",
    price: "RP 500.000 / 24 JAM",
    image: "/cars/hrvnew2022.png",
    bgText: "HR-V",
  },
  {
    id: 3,
    name: "SUZUKI ERTIGA 2025 MATIC",
    description:
      "MPV keluarga yang luas dan nyaman untuk 5–7 penumpang. Pilihan ideal untuk perjalanan wisata, antar jemput bandara, maupun kebutuhan harian dengan transmisi otomatis yang praktis.",
    price: "RP 350.000 / 24 JAM",
    image: "/cars/ertiga2025.webp",
    bgText: "ERTIGA",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(vehicles[0]);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden px-4 sm:px-6 md:px-16 pt-16 pb-28">
      {/* Background Big Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <AnimatePresence mode="wait">
          <motion.h2
            key={active.bgText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.08, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-[22vw] sm:text-[18vw] lg:text-[15vw] font-black tracking-tighter"
          >
            {active.bgText}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            key={active.id + "info"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold border-b-2 border-yellow-500 inline-block pb-1">
                {active.name}
              </h1>

              <p className="mt-4 text-sm sm:text-xs text-neutral-400 leading-relaxed max-w-full sm:max-w-xs mx-auto lg:mx-0">
                {active.description}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">
                Starting At
              </p>
              <p className="text-xl sm:text-2xl font-bold mt-1">
                {active.price}
              </p>
            </div>
          </motion.div>
        </div>

        {/* CENTER IMAGE */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex items-center justify-center relative">
          {/* Ellipse Background */}
          <div className="absolute w-[110%] h-[55%] border border-white/10 rounded-[100%] rotate-[-5deg]" />

          <div className="relative w-full max-w-3xl h-[220px] sm:h-[280px] md:h-[380px] lg:h-[460px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.name}
                initial={{ opacity: 0, scale: 0.85, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -40 }}
                transition={{ duration: 0.6 }}
                className="max-h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT LABEL */}
        <div className="lg:col-span-3 hidden lg:flex justify-end items-center order-3">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-white/40"></div>
            <span className="text-xs tracking-widest uppercase opacity-60">
              Malang City
            </span>
          </div>
        </div>
      </div>

      {/* SELECTOR */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="flex flex-col items-center gap-5">
          {/* DOTS */}
          <div className="flex gap-3">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active.id === v.id ? "bg-yellow-500 w-6" : "bg-white/30 w-2"
                }`}
              />
            ))}
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden px-6 h-[100px] items-center scrollbar-hide">
            {vehicles.map((car) => (
              <button
                key={car.id}
                onClick={() => setActive(car)}
                className={`relative flex-shrink-0 transition-all duration-500 ${
                  active.id === car.id
                    ? "scale-105 opacity-100"
                    : "scale-95 opacity-40 hover:opacity-70"
                }`}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-24 sm:w-32 md:w-36 object-contain"
                />

                {active.id === car.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-500 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
