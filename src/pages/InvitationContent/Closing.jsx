import { motion } from "framer-motion";

const fadeUpSlow = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeOut" },
  },
};

const ClosingSection = () => {
  return (
    <section className="relative z-10 px-6 py-40">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* ORNAMENT */}
        <motion.div
          variants={fadeUpSlow}
          className="flex items-center justify-center gap-6 mb-14 opacity-60"
        >
          <span className="w-16 h-[1px] bg-[#d6c28f]/60" />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f]/80">
            Penutup
          </span>
          <span className="w-16 h-[1px] bg-[#d6c28f]/60" />
        </motion.div>

        {/* MESSAGE */}
        <motion.p
          variants={fadeUpSlow}
          className="text-sm md:text-base leading-relaxed text-white/70 mb-16"
        >
          Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          <br />
          <br />
          Atas perhatian dan doa yang tulus, kami mengucapkan terima kasih.
        </motion.p>

        {/* NAMES */}
        <motion.h3
          variants={fadeUpSlow}
          className="font-serif text-4xl md:text-5xl font-light tracking-tight"
        >
          Ahmad Fauzan
          <span className="block italic text-[#d6c28f] my-2">&</span>
          Bunga Citra
        </motion.h3>

        {/* FOOT NOTE */}
        <motion.p
          variants={fadeUpSlow}
          className="mt-12 text-[10px] tracking-[0.4em] uppercase text-white/50"
        >
          Dengan penuh cinta & doa
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
