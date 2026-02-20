import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="/">
            <span className="text-white font-bold tracking-tight text-sm sm:text-base">
              CV Pratama Transport Group
            </span>
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="/" className="hover:text-yellow-500 transition">
            Home
          </a>
          <a href="#layanan" className="hover:text-yellow-500 transition">
            Layanan
          </a>
          <a href="#armada" className="hover:text-yellow-500 transition">
            Armada
          </a>
          <a href="/paket-lebaran" className="hover:text-yellow-500 transition">
            Paket Lebaran
          </a>
          <a href="#contact">
            <button className="ml-4 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
              Contact
            </button>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-white text-base">
              <a href="/" onClick={() => setOpen(false)}>
                Home
              </a>
              <a href="#layanan" onClick={() => setOpen(false)}>
                Layanan
              </a>
              <a href="#armada" onClick={() => setOpen(false)}>
                Armada
              </a>
              <a href="/paket-lebaran" onClick={() => setOpen(false)}>
                Paket Lebaran
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold mt-4">
                  Contact
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
