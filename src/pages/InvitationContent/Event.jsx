import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const EventSection = () => {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-5xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-28">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            Event
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light">
            Akad & Resepsi
          </h2>
        </motion.div>

        {/* EVENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* AKAD */}
          <motion.div
            variants={fadeUp}
            className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-14 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Akad Nikah
            </p>

            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Sabtu
            </h3>

            <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
              12 Agustus 2026
            </p>

            <p className="font-serif text-5xl md:text-6xl font-light mb-8">
              08.00 WIB
            </p>

            <p className="text-sm text-white/60 leading-relaxed mb-10">
              Masjid Penaraga
              <br />
              Kota Bima
            </p>

            <a
              href="https://maps.app.goo.gl/BaaKBmPUWGJuBuA66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Lihat Lokasi
            </a>
          </motion.div>

          {/* RESEPSI */}
          <motion.div
            variants={fadeUp}
            className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-14 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Resepsi
            </p>

            <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
              Sabtu
            </h3>

            <p className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6">
              12 Agustus 2026
            </p>

            <p className="font-serif text-5xl md:text-6xl font-light mb-8">
              11.00 WIB
            </p>

            <p className="text-sm text-white/60 leading-relaxed mb-10">
              Paruga Na'e / Convention Hall
              <br />
              Kota Bima
            </p>

            <a
              href="https://maps.app.goo.gl/Lt46JWAauWTRfgum6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Lihat Lokasi
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventSection;
