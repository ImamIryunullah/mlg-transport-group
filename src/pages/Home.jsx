import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import HeroSection from "./Hero";
import QuoteSection from "./InvitationContent/Quote";
import CoupleSection from "./InvitationContent/Couple";
import LoveStorySection from "./InvitationContent/LoveStory";
import EventSection from "./InvitationContent/Event";
import GallerySection from "./InvitationContent/Gallery";
import GiftSection from "./InvitationContent/Gift";
import RSVPSection from "./InvitationContent/RVSP";
import ClosingSection from "./InvitationContent/Closing";
import AudioPlayer from "../components/AudioPlayer";

const Home = () => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
  }, [opened]);

  return (
    <main className="relative min-h-screen text-white">
      {/* GLOBAL ANIMATED BACKGROUND */}
      <motion.div
        className="fixed inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08],
        }}
        transition={{
          opacity: { duration: 1.8, ease: "easeOut" },
          scale: {
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          },
        }}
      >
        <img
          src="/galeri/PreWed.jpg"
          alt="Prewedding Background"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
      </motion.div>

      {/* HERO */}
      {!opened && <HeroSection onOpen={() => setOpened(true)} />}

      {/* CONTENT */}
      {opened && (
        <div className="relative z-10">
          <QuoteSection />
          <CoupleSection />
          <LoveStorySection />
          <EventSection />
          <GallerySection />
          <GiftSection />
          <RSVPSection />
          <ClosingSection />
        </div>
      )}

      {opened && <AudioPlayer />}
    </main>
  );
};

export default Home;
