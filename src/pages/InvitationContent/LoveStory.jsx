import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const LoveStorySection = () => {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-3xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={item} className="text-center mb-28">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            Love Story
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light">
            Jejak yang Menjadi Takdir
          </h2>
        </motion.div>

        {/* STORY ITEM */}
        <motion.div variants={item} className="relative mb-24">
          <span className="block font-serif text-7xl md:text-9xl text-white/10 absolute -top-12 -left-2">
            2019
          </span>
          <div className="relative pl-2">
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Pertemuan Pertama
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/70">
              Tidak ada yang kebetulan. Dari sebuah pertemuan sederhana,
              percakapan kecil berubah menjadi ruang nyaman untuk pulang.
            </p>
          </div>
        </motion.div>

        {/* STORY ITEM */}
        <motion.div variants={item} className="relative mb-24">
          <span className="block font-serif text-7xl md:text-9xl text-white/10 absolute -top-12 -left-2">
            2021
          </span>
          <div className="relative pl-2">
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Tumbuh Bersama
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/70">
              Belajar memahami, saling menguatkan, dan menerima bahwa cinta
              bukan tentang sempurna, melainkan tentang bertahan.
            </p>
          </div>
        </motion.div>

        {/* STORY ITEM */}
        <motion.div variants={item} className="relative">
          <span className="block font-serif text-7xl md:text-9xl text-white/10 absolute -top-12 -left-2">
            2026
          </span>
          <div className="relative pl-2">
            <h3 className="text-xl md:text-2xl font-light mb-4">
              Ikatan Selamanya
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-white/70">
              Dari banyak doa dan perjalanan panjang, kami memutuskan untuk
              melangkah bersama, mengikat janji dalam satu ikrar suci.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveStorySection;
