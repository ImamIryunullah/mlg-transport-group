import { motion } from "framer-motion";
import { ShieldCheck, Car, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Armada Terawat & Bersih",
    desc: "Semua unit rutin diservis dan dibersihkan sebelum digunakan untuk memastikan kenyamanan dan keamanan perjalanan Anda.",
  },
  {
    icon: Car,
    title: "Pilihan Mobil Lengkap",
    desc: "Tersedia berbagai jenis kendaraan mulai dari city car hingga mobil keluarga premium untuk segala kebutuhan.",
  },
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    desc: "Siap melayani kapan saja dengan respon cepat dan profesional di wilayah Malang dan sekitarnya.",
  },
  {
    icon: MapPin,
    title: "Area Malang & Sekitarnya",
    desc: "Melayani rental dalam kota, luar kota, hingga perjalanan wisata Batu dan Bromo.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-3">
            Mengapa Memilih Kami
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Kenyamanan & Kepercayaan
            <br />
            dalam Setiap Perjalanan
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-yellow-500/40 transition duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-yellow-500/0 group-hover:bg-yellow-500/5 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 transition">
                    <Icon className="text-yellow-500" size={28} />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
