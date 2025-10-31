import { Phone, MessageCircle } from "lucide-react";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
      <a
        href="https://wa.me/918894066639"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a
        href="tel:+918894066639"
        className="bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default StickyButtons;
