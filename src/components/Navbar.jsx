import React, { useEffect, useRef, useState } from "react";

const MENU = ["Home", "Story", "Gallery", "Timeline", "Letter"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // State untuk section aktif

  const lastScroll = useRef(0);
  const clickSound = useRef(null);
  const audioReady = useRef(false);

  // 1. Logika Scroll Spy (Mendeteksi Section Aktif)
  useEffect(() => {
    const handleScrollSpy = () => {
      const currentScroll = window.scrollY;

      // Update background navbar & show/hide logic
      setScrolled(currentScroll > 40);
      setShowNav(currentScroll < lastScroll.current || currentScroll < 80);
      lastScroll.current = currentScroll;

      // Deteksi section mana yang sedang berada di viewport
      MENU.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - 100; // Offset agar perpindahan terasa natural
          const sectionHeight = section.offsetHeight;
          if (
            currentScroll >= sectionTop &&
            currentScroll < sectionTop + sectionHeight
          ) {
            setActiveSection(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 2. Fungsi Smooth Scroll saat Menu di-Klik
  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 20; // Sesuaikan jika navbar menutupi konten
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id.toLowerCase() === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
      setOpen(false); // Tutup menu mobile jika terbuka
    }
  };

  // Logika Audio & Magnetic (Tetap sama)
  useEffect(() => {
    const primeAudio = () => {
      if (!audioReady.current && clickSound.current) {
        clickSound.current.volume = 0;
        clickSound.current.play().then(() => {
          clickSound.current.pause();
          clickSound.current.currentTime = 0;
          clickSound.current.volume = 1;
          audioReady.current = true;
        });
      }
    };
    window.addEventListener("pointerdown", primeAudio, { once: true });
    return () => window.removeEventListener("pointerdown", primeAudio);
  }, []);

  const playClick = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
  };

  const magnetic = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const resetMagnetic = (e) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  return (
    <>
      <audio ref={clickSound} src="/sounds/click.mp3" preload="auto" />

      <nav
        className={`fixed top-6 left-0 w-full z-50 px-6 transition-all duration-500
        ${showNav ? "translate-y-0" : "-translate-y-24"}`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between rounded-full px-8 py-3
          backdrop-blur-xl border transition-all duration-500
          ${
            scrolled
              ? "bg-black/60 border-white/10 shadow-2xl"
              : "bg-white/5 border-white/10"
          }`}
        >
          <span className="text-[10px] tracking-[0.4em] text-[#d6c28f] uppercase font-light">
            Eternal Moment
          </span>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-xs">
            {MENU.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => {
                    playClick();
                    scrollToSection(item);
                  }}
                  onMouseMove={magnetic}
                  onMouseLeave={resetMagnetic}
                  className={`relative transition-all duration-500 py-1 tracking-widest uppercase
                  ${
                    isActive
                      ? "text-[#d6c28f]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                  {/* Underline Indicator */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#d6c28f] transition-all duration-500
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => {
              playClick();
              setOpen(true);
            }}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`w-5 h-[1px] bg-white transition-all ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`w-5 h-[1px] bg-white transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-[1px] bg-white transition-all ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0a0a0c]/98 backdrop-blur-2xl transition-all duration-700 ease-in-out
        ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {MENU.map((item) => (
            <button
              key={item}
              onClick={() => {
                playClick();
                scrollToSection(item);
              }}
              className={`text-2xl tracking-[0.3em] uppercase transition-all duration-300
              ${
                activeSection === item
                  ? "text-[#d6c28f] font-medium"
                  : "text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setOpen(false)}
            className="mt-12 text-[10px] tracking-[0.5em] text-white/30 border border-white/10 px-6 py-2 rounded-full"
          >
            CLOSE
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
