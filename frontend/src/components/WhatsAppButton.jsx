import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919871094466"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20BD5A] transition-all hover:scale-110 md:bottom-6"
      aria-label="Contact us on WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8 brightness-0 invert" />
    </a>
  );
};