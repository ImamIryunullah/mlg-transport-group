import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const zoomInitial = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const HeroSection = ({ onOpen }) => {
  return (
    <section className="fixed inset-0 z-50  text-white">
      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center max-w-xl w-full space-y-10"
        >
          <motion.p
            variants={item}
            className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80"
          >
            Jejak Momen
          </motion.p>

          <motion.h1
            variants={item}
            className="font-serif text-7xl md:text-9xl font-light tracking-tight"
          >
            A<span className="italic text-[#d6c28f]">&</span>B
          </motion.h1>

          <motion.p
            variants={item}
            className="font-light text-sm md:text-base tracking-[0.3em] uppercase text-white/80"
          >
            Ahmad Fauzan · Bunga Citra
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center justify-center gap-6 opacity-60"
          >
            <span className="w-12 h-[1px] bg-[#d6c28f]/60" />
            <span className="text-[10px] tracking-[0.4em] uppercase">
              Save The Date
            </span>
            <span className="w-12 h-[1px] bg-[#d6c28f]/60" />
          </motion.div>

          <motion.p
            variants={item}
            className="text-sm tracking-[0.4em] uppercase text-[#d6c28f]"
          >
            12 · Agustus · 2026
          </motion.p>

          <motion.button
            variants={item}
            onClick={onOpen}
            className="group relative mt-10 inline-flex items-center justify-center px-12 py-4 rounded-full border border-[#d6c28f]/40 overflow-hidden transition-all duration-700 hover:border-[#d6c28f]"
          >
            <span className="relative z-10 text-[10px] tracking-[0.5em] uppercase group-hover:text-black transition">
              Buka Undangan
            </span>
            <div className="absolute inset-0 bg-[#d6c28f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
