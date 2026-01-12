import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Package, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background hidden md:block">
        <div className="container mx-auto">
          <div className="flex h-24 items-center justify-between px-4">
            {/* Logo - Large on Desktop */}
            <Link to="/" className="flex items-center">
              <img 
                src="/infinity-logo.png" 
                alt="Infinity Auto Parts" 
                className="h-20 w-auto object-contain"
              />
            </Link>

            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive('/products') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header with Logo */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background md:hidden">
        <div className="flex h-16 items-center justify-center px-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/infinity-logo.png" 
              alt="Infinity Auto Parts" 
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Mobile Floating Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg md:hidden">
        <div className="grid grid-cols-4 h-16">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive('/') ? 'text-primary bg-secondary' : 'text-muted-foreground'
            }`}
          >
            <Home size={20} />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            to="/products"
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive('/products') || location.pathname.startsWith('/products/') ? 'text-primary bg-secondary' : 'text-muted-foreground'
            }`}
          >
            <Package size={20} />
            <span className="text-xs font-medium">Products</span>
          </Link>
          <Link
            to="/about"
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive('/about') ? 'text-primary bg-secondary' : 'text-muted-foreground'
            }`}
          >
            <Info size={20} />
            <span className="text-xs font-medium">About</span>
          </Link>
          <Link
            to="/contact"
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive('/contact') ? 'text-primary bg-secondary' : 'text-muted-foreground'
            }`}
          >
            <Phone size={20} />
            <span className="text-xs font-medium">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
};