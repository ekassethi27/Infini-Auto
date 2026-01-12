import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export const RequestProductButton = () => {
  const requestMessage = "Hello, I would like to request a product that is not listed on your website.";
  const whatsappUrl = `https://wa.me/919871094466?text=${encodeURIComponent(requestMessage)}`;

  return (
    <div className="bg-secondary border border-border rounded-xl p-8 text-center mb-16 md:mb-0">
      <h3 className="text-2xl font-bold text-foreground mb-4">
        Can't Find What You're Looking For?
      </h3>
      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
        We have access to thousands of auto parts. If you don't see what you need in our catalog, 
        send us a request and we'll source it for you.
      </p>
      <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
          Request a Product
        </a>
      </Button>
    </div>
  );
};
