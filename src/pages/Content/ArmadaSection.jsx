import { motion } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "Toyota Innova Reborn",
    price: "RP 500.000 / 24 JAM",
    image: "/cars/innova.png",
  },
  {
    id: 2,
    name: "Honda HR-V 2022",
    price: "RP 500.000 / 24 JAM",
    image: "/cars/hrvnew2022.png",
  },
  {
    id: 3,
    name: "Suzuki Ertiga 2025 Matic",
    price: "RP 350.000 / 24 JAM",
    image: "/cars/ertiga2025.webp",
  },
];

export default function ArmadaSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-neutral-950 via-black to-neutral-900 text-white overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
            Armada Unggulan
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Pilihan Kendaraan Premium
            <br />
            untuk Perjalanan Anda
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-yellow-500/40 transition duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-transparent transition duration-500" />

              {/* Car Image */}
              <div className="relative z-10 flex justify-center mb-8">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-64 h-auto object-contain transition duration-700 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-lg font-semibold mb-3">{car.name}</h3>

                <p className="text-yellow-500 font-bold mb-6">{car.price}</p>

                <button className="px-6 py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm hover:bg-yellow-400 transition">
                  Sewa Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
