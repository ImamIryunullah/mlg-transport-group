import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const LocationSection = () => {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-xs mb-6">
            Location
          </p>

          <h2 className="text-3xl md:text-5xl font-light tracking-wide">
            Kunjungi{" "}
            <span className="text-yellow-500 font-semibold">Showroom Kami</span>
          </h2>

          <div className="w-24 h-[2px] bg-yellow-500 mx-auto mt-8"></div>
        </div>

        {/* Layout */}
        <div className="relative">
          {/* Map Background */}
          <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10">
            <iframe
              title="Lokasi CV Pratama Transport Group"
              src="https://www.google.com/maps?q=-7.9175297,112.6136623&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="grayscale contrast-125"
            ></iframe>
          </div>

          {/* Floating Info Card */}
          <div
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 
bg-neutral-900/90 border border-white/5 
rounded-3xl p-10 w-[90%] md:w-[420px] 
shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <h3 className="text-xl font-semibold mb-8 text-white">
              CV Pratama Transport Group
            </h3>

            <div className="space-y-6 text-sm text-neutral-400">
              <div className="flex items-start gap-4">
                <FiMapPin className="text-yellow-500 text-lg mt-1" />
                <div>
                  <p className="font-medium text-neutral-200">Alamat</p>
                  <p>Malang, Jawa Timur</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiClock className="text-yellow-500 text-lg mt-1" />
                <div>
                  <p className="font-medium text-neutral-200">
                    Jam Operasional
                  </p>
                  <p>08:00 - 20:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FiPhone className="text-yellow-500 text-lg mt-1" />
                <div>
                  <p className="font-medium text-neutral-200">Kontak</p>
                  <p>+62 823-3832-5121</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Ak+rentcar+malang/@-7.9175297,112.6136623,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-10 text-center py-3 rounded-full 
    bg-yellow-500 text-black font-semibold 
    hover:bg-yellow-400 transition duration-300"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Blur Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default LocationSection;
