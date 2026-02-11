import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "6282338325121";

  const message = `Halo CV Pratama Transport Group!,
Saya ingin menanyakan informasi sewa mobil.

Nama:
Tanggal Sewa:
Durasi:
Mobil yang diminati:

Terima kasih!`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white px-5 py-3 rounded-full shadow-2xl shadow-green-500/30 transition duration-300"
    >
      <FaWhatsapp size={22} />
      <span className="font-semibold text-sm hidden sm:inline">
        Chat WhatsApp
      </span>
    </a>
  );
}
