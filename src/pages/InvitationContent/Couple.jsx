import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const CoupleSection = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full"
      >
        {/* SECTION TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-28">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            Mempelai
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light tracking-tight">
            Dua Jiwa, Satu Ikatan
          </h2>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* GROOM */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-[420px] overflow-hidden rounded-t-full border border-white/10">
              <img
                src="/galeri/Pria.jpeg"
                alt="Mempelai Pria"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light">
                Ahmad Fauzan
              </h3>
              <p className="mt-3 text-sm tracking-[0.3em] uppercase text-white/60">
                Putra Pertama
              </p>
              <p className="mt-2 text-sm text-white/50">
                Bapak Fulan & Ibu Fulanah
              </p>
            </div>
          </motion.div>

          {/* BRIDE */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="relative w-64 h-80 md:w-72 md:h-[420px] overflow-hidden rounded-t-full border border-white/10">
              <img
                src="/galeri/Wanita.jpg"
                alt="Mempelai Wanita"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light">
                Bunga Citra
              </h3>
              <p className="mt-3 text-sm tracking-[0.3em] uppercase text-white/60">
                Putri Kedua
              </p>
              <p className="mt-2 text-sm text-white/50">
                Bapak Fulan & Ibu Fulanah
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoupleSection;
