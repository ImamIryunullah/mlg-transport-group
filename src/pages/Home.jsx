import Navbar from "../components/Navbar";
import HeroSection from "./Hero";
import StorySection from "./Story";
import GallerySection from "./Gallery";
import TimelineSection from "./TimeLine";
import LetterSection from "./Letter";
import AudioPlayer from "../components/AudioPlayer"; // Import di sini

const Home = () => {
  return (
    <main className="bg-[#0a0a0c]">
      <Navbar />

      {/* Background global jika diperlukan */}
      <div className="relative">
        <HeroSection />
        <StorySection />
        <GallerySection />
        <TimelineSection />
        <LetterSection />
      </div>

      {/* Audio Player diletakkan paling bawah agar z-index bekerja maksimal */}
      <AudioPlayer />
    </main>
  );
};

export default Home;
