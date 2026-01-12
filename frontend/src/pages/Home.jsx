import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Truck, Settings, Disc, Box, Circle, Hexagon, Layers, Package } from 'lucide-react';
import { RequestProductButton } from '@/components/RequestProductButton';

export const Home = () => {
  const categories = [
    { name: 'PINION', count: '40+', icon: Settings },
    { name: 'PTO GEAR', count: '35+', icon: Settings },
    { name: 'CLUTCH BEARING', count: '25+', icon: Circle },
    { name: 'CLUTCH PLATE', count: '30+', icon: Disc },
    { name: 'AXLE', count: '45+', icon: Hexagon },
    { name: 'GEAR BOX', count: '20+', icon: Box },
  ];

  const trustFeatures = [
    { icon: Truck, text: 'Fast Dispatch' },
    { icon: ShieldCheck, text: 'Quality Checked' },
    { icon: Layers, text: 'Bulk Orders' },
  ];

  return (
    <div className="min-h-screen pt-28 md:pt-0">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img 
              src="/infinity-logo.png" 
              alt="" 
              className="w-[800px] h-auto object-contain opacity-20"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 py-12 md:py-0">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Logo */}
            <div className="flex justify-center animate-fade-in">
              <img 
                src="/infinity-logo.png" 
                alt="Infinity Auto Parts" 
                className="h-68 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Tagline */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed">
                Precision-engineered components for commercial vehicles
              </p>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link to="/products" className="flex items-center gap-2">
                  <Package size={20} />
                  Browse Parts
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-base px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">628+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">36+</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="trust-badge">
                <feature.icon size={20} className="text-primary" />
                <span className="font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Find the right parts for your commercial vehicles
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link key={index} to={`/products?category=${encodeURIComponent(category.name)}`} className="group">
                <Card className="card-hover h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <category.icon size={32} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} parts</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Help Finding the Right Part?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Our team is ready to assist you with product enquiries and bulk orders.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <RequestProductButton />
        </div>
      </section>
    </div>
  );
};