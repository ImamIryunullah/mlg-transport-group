import React from "react";
import Navbar from "../components/Navbar";
import { cars } from "../data/armadaData";

export default function Armada() {
  const phone = "6282338325121";

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Optional overlay effect */}
      <section className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
            CV Pratama Transport Group
          </p>

          <h1 className="text-3xl md:text-5xl font-bold">Semua Armada Kami</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cars.map((car) => {
            const message = encodeURIComponent(
              `Halo CV Pratama Transport Group,
Saya ingin booking mobil:

${car.name}

Mohon info ketersediaan.`
            );

            return (
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
                  <h3 className="text-sm font-semibold mb-3">{car.name}</h3>

                  <a
                    href={`https://wa.me/${phone}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2 rounded-full bg-yellow-500 text-black font-semibold text-sm hover:bg-yellow-400 transition"
                  >
                    Booking Sekarang
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
