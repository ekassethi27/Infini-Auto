import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { RequestProductButton } from '@/components/RequestProductButton';

export const Contact = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">Get in touch with our team for enquiries and support</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">Call us directly</p>
                <a
                  href="tel:+919871094466"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  +91 9871094466
                </a>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Quick response on WhatsApp</p>
                <Button asChild variant="default">
                  <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer">
                    Message Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-4">
                  {businessHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                      <span className="text-sm font-medium text-foreground">{schedule.day}</span>
                      <span className="text-sm text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Visit Us</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-2">Address:</p>
                    <p className="text-sm">S N-201-M N-2761</p>
                    <p className="text-sm">GURU NANAK MOTOR MARKET</p>
                    <p className="text-sm">KASHMERE GATE, DELHI-110006</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">GST Number:</p>
                    <p className="text-sm font-mono">07AAUXPK7061ZX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-secondary border border-border rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Help with Bulk Orders?</h3>
            <p className="text-muted-foreground mb-6">
              Our team specializes in bulk orders and can provide competitive pricing for commercial clients.
              Contact us via WhatsApp for immediate assistance.
            </p>
            <Button asChild size="lg">
              <a href="https://wa.me/919871094466" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} className="mr-2" />
                Contact Sales Team
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};