import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const GallerySection = () => {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-24">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light">
            Potret Perjalanan
          </h2>
        </motion.div>

        {/* HORIZONTAL SCROLL */}
        <motion.div
          variants={fadeUp}
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
        >
          {[
            "/galeri/1.jpg",
            "/galeri/2.webp",
            "/galeri/3.jpg",
            "/galeri/4.jpg",
            "/galeri/5.webp",
          ].map((img, i) => (
            <div
              key={i}
              className="relative min-w-[280px] md:min-w-[420px] h-[420px] md:h-[560px] snap-center overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GallerySection;
