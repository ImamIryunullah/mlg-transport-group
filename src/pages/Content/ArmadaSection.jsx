import { Link } from "react-router-dom";
import { cars } from "../../data/armadaData";

export default function ArmadaSection() {
  const previewCars = cars.slice(0, 12);

  return (
    <section id="armada" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-3">
            Armada Kami
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Pilihan Kendaraan Premium
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {previewCars.map((car) => (
            <div
              key={car.id}
              className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-yellow-500/40 transition"
            >
              <div className="h-48 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="max-h-full object-contain transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="text-center">
                <h3 className="text-sm font-semibold mb-2">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON LIHAT SEMUA */}
        <div className="text-center mt-16">
          <Link
            to="/armada"
            className="inline-block px-8 py-3 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition font-semibold"
          >
            Lihat Lebih Banyak
          </Link>
        </div>
      </div>
    </section>
  );
}
