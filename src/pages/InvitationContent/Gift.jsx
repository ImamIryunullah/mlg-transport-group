import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const GiftSection = () => {
  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-4xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            Wedding Gift
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light">
            Tanda Kasih
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun, apabila berkenan memberikan tanda kasih, dapat disampaikan
            melalui:
          </p>
        </motion.div>

        {/* GIFT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BANK TRANSFER */}
          <motion.div
            variants={fadeUp}
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-12 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Transfer Bank
            </p>

            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
              BCA
            </h3>

            <p className="text-lg tracking-widest mb-2">1234567890</p>

            <p className="text-sm text-white/60 mb-8">a.n. Ahmad Fauzan</p>

            <button
              onClick={() => navigator.clipboard.writeText("1234567890")}
              className="text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Salin Nomor Rekening
            </button>
          </motion.div>

          {/* KADO FISIK */}
          <motion.div
            variants={fadeUp}
            className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-12 text-center"
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#d6c28f] mb-6">
              Kado Fisik
            </p>

            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4">
              Alamat Pengiriman
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-8">
              Jl. Soekarno Hatta
              <br />
              Kecamatan Raba
              <br />
              Kota Bima, 84113
            </p>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "Jl. Mawar Indah No. 12, Kecamatan Sukamaju, Kota Surabaya, 60123"
                )
              }
              className="text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-2 hover:text-[#d6c28f] transition"
            >
              Salin Alamat
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftSection;
