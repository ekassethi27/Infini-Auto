import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Truck, Settings, Disc, Box, Circle, Hexagon, Layers } from 'lucide-react';
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
    <div className="min-h-screen pb-20 md:pb-0">
      <section className="bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="/infinity-logo.png" 
                alt="Infinity Auto Parts" 
                className="h-32 w-auto object-contain"
              />
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Precision-engineered components for commercial vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/products">Browse Parts</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer">
                  WhatsApp Enquiry
                </a>
              </Button>
            </div>
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