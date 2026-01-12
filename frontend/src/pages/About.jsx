import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Globe, Users, CheckCircle } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Deep expertise across imports, exports, and supply chain management'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Strong international sourcing network for quality components'
    },
    {
      icon: Users,
      title: 'Long-term Partnerships',
      description: 'Built on reliability, trust, and consistent quality delivery'
    },
    {
      icon: CheckCircle,
      title: 'Industry Expertise',
      description: 'Specialized knowledge in heavy-duty commercial vehicle parts'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Decades of expertise, powered by dedication and quality
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-5xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-96 md:h-auto w-full">
                <img
                  src="/founder.png"
                  alt="Gagandeep Singh Sethi - Founder"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Gagandeep Singh Sethi
                </h2>
                <p className="text-lg text-primary font-medium mb-6">
                  Founder & Managing Director
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Infinity Auto Parts is led by Gagandeep Singh Sethi, a veteran in the 
                    automotive spare parts industry with over 25 years of hands-on experience.
                  </p>
                  <p>
                    With deep expertise across imports and exports, the business has built a 
                    strong reputation for reliability, quality, and long-term partnerships.
                  </p>
                  <p>
                    Backed by decades of industry knowledge and a global sourcing network, 
                    Infinity Auto Parts focuses on supplying dependable components that meet 
                    the real-world demands of heavy-duty vehicles.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Infinity Auto Parts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Our Commitment
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Infinity Auto Parts, we understand that commercial vehicle operations 
                  demand reliability and precision. Our extensive catalog of over 600+ 
                  carefully sourced components ensures you have access to the parts you need, 
                  when you need them.
                </p>
                <p>
                  From pinions and PTO gears to clutch systems and axle components, every 
                  product in our inventory is selected with quality and performance in mind. 
                  We work directly with trusted manufacturers and maintain stringent quality 
                  checks to ensure each component meets industry standards.
                </p>
                <p>
                  Our business is built on relationships – not just transactions. Whether 
                  you're a fleet operator, workshop, or distributor, we're committed to 
                  providing personalized service, competitive pricing for bulk orders, and 
                  expert guidance to help you find the right parts for your specific needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
