import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/infinity-logo.png" 
              alt="Infinity Auto Parts" 
              className="h-10 w-auto object-contain"
              style={{ filter: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.05))' }}
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="default" size="sm">
              <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer">
                WhatsApp Enquiry
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Link
                to="/"
                className={`text-sm font-medium ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`text-sm font-medium ${
                  isActive('/products') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-medium ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild variant="default" size="sm" className="w-full">
                <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer">
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};