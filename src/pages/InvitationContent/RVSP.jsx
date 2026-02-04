import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const RSVPSection = () => {
  const [form, setForm] = useState({
    name: "",
    attendance: "",
    guests: "1",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Terima kasih atas konfirmasi kehadiran Anda 🤍");
  };

  return (
    <section className="relative z-10 px-6 py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-3xl mx-auto"
      >
        {/* TITLE */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#d6c28f]/80 mb-4">
            RSVP
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light">
            Konfirmasi Kehadiran
          </h2>

          <p className="mt-6 text-sm md:text-base text-white/60 leading-relaxed max-w-xl mx-auto">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-8 md:px-12 py-14 space-y-8"
        >
          {/* NAMA */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-white/60 mb-3">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Tuliskan nama Anda"
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-[#d6c28f] placeholder:text-white/30"
            />
          </div>

          {/* KEHADIRAN */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-white/60 mb-3">
              Konfirmasi Kehadiran
            </label>
            <select
              name="attendance"
              required
              value={form.attendance}
              onChange={handleChange}
              className="w-full bg-transparent text-white border-b border-white/30 py-3 
             focus:outline-none focus:border-[#d6c28f]"
            >
              <option value="" disabled className="bg-black text-white">
                Pilih kehadiran
              </option>
              <option value="Hadir" className="bg-black text-white">
                Hadir
              </option>
              <option value="Tidak Hadir" className="bg-black text-white">
                Tidak Hadir
              </option>
            </select>
          </div>

          {/* JUMLAH TAMU */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-white/60 mb-3">
              Jumlah Tamu
            </label>
            <select
              name="guests"
              value={form.guests}
              onChange={handleChange}
              className="w-full bg-transparent text-white border-b border-white/30 py-3 
             focus:outline-none focus:border-[#d6c28f]"
            >
              <option value="1" className="bg-black text-white">
                1 Orang
              </option>
              <option value="2" className="bg-black text-white">
                2 Orang
              </option>
            </select>
          </div>

          {/* PESAN */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-white/60 mb-3">
              Ucapan & Doa (Opsional)
            </label>
            <textarea
              name="message"
              rows="3"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis doa terbaik Anda"
              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-[#d6c28f] placeholder:text-white/30 resize-none"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-8 text-center">
            <button
              type="submit"
              className="px-10 py-3 text-[10px] tracking-[0.4em] uppercase border border-white/40 rounded-full hover:border-[#d6c28f] hover:text-[#d6c28f] transition"
            >
              Kirim RSVP
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
