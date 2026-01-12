import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">Infinity Auto Parts</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Precision-engineered components for commercial vehicles. Quality you can trust.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Address:</p>
              <p>S N-201-M N-2761, GURU NANAK MOTOR MARKET</p>
              <p>KASHMERE GATE, DELHI-110006</p>
              <p className="mt-3"><span className="font-medium text-foreground">GST:</span> 07AAUXPK7061ZX</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone size={16} className="mr-2" />
                +91 9871094466
              </li>
              <li>
                <a
                  href="https://wa.me/919871094466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Infinity Auto Parts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};