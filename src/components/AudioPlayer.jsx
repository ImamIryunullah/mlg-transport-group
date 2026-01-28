import React, { useState, useRef, useEffect } from "react";

const AudioPlayer = () => {
  // 1. Set default state ke true
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            // Hapus event listener setelah berhasil diputar
            window.removeEventListener("click", playAudio);
            window.removeEventListener("scroll", playAudio);
            window.removeEventListener("touchstart", playAudio);
          })
          .catch((err) => {
            console.log("Autoplay dicegah browser, menunggu interaksi user...");
          });
      }
    };

    // Tambahkan listener untuk memicu audio saat user berinteraksi pertama kali
    window.addEventListener("click", playAudio);
    window.addEventListener("scroll", playAudio);
    window.addEventListener("touchstart", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center gap-4">
      {/* AUDIO SOURCE */}
      <audio ref={audioRef} src="/sounds/Sounds.mp3" loop preload="auto" />

      {/* TEXT LABEL (Desktop only) */}
      <div className="hidden md:block overflow-hidden">
        <p
          className={`text-[10px] tracking-[0.4em] uppercase transition-all duration-700 ${
            isPlaying ? "translate-x-0 opacity-40" : "translate-x-10 opacity-0"
          }`}
        >
          Now Playing
        </p>
      </div>

      {/* TOGGLE BUTTON */}
      <button
        onClick={toggleAudio}
        className="relative group w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#d6c28f]/50 transition-all duration-500 shadow-2xl"
      >
        {/* VISUALIZER BARS */}
        <div className="flex items-end gap-[3px] h-4">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`w-[2px] bg-[#d6c28f] transition-all duration-500 ${
                isPlaying ? `animate-music-bar bar-${i}` : "h-1 opacity-50"
              }`}
            />
          ))}
        </div>

        {/* HOVER GLOW & PULSE */}
        {isPlaying && (
          <div className="absolute inset-0 rounded-full bg-[#d6c28f]/10 animate-ping pointer-events-none" />
        )}
        <div className="absolute inset-0 rounded-full bg-[#d6c28f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>

      <style jsx>{`
        @keyframes music-bar {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 16px;
          }
        }
        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }
        .bar-1 {
          animation-delay: 0.1s;
        }
        .bar-2 {
          animation-delay: 0.3s;
        }
        .bar-3 {
          animation-delay: 0.2s;
        }
        .bar-4 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
