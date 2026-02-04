import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative text-white py-32 px-6 overflow-hidden">
      {/* Ornamental blur */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d6c28f]/10 rounded-full blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto text-center space-y-12"
      >
        {/* Quote */}
        <blockquote className="font-serif text-3xl md:text-4xl leading-relaxed font-light">
          “Dan di antara tanda-tanda kebesaran-Nya,
          <br />
          Dia menciptakan pasangan agar kamu menemukan
          <span className="italic text-[#d6c28f]"> ketenangan</span>.”
        </blockquote>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="origin-center mx-auto w-24 h-[1px] bg-[#d6c28f]/60"
        />

        {/* Source */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-[11px] tracking-[0.4em] uppercase"
        >
          QS. Ar-Rum : 21
        </motion.p>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
