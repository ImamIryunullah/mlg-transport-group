import React from "react";
import Navbar from "../components/Navbar";

const PaketLebaran = () => {
  const phone = "6282338325121";
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-yellow-500 uppercase tracking-widest text-sm mb-4">
            Paket Spesial Lebaran
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Price List Rental Mobil Lebaran
          </h2>

          <div className="relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="/cars/PriceList.png"
              alt="Price List Paket Lebaran CV Pratama Transport Group"
              className="w-full object-cover  "
            />

            {/* Optional overlay effect */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
          </div>

          <div className="mt-10">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Halo CV Pratama Transport Group, saya ingin info lebih lanjut tentang Paket Lebaran."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
            >
              Booking Paket Lebaran
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
export default PaketLebaran;
