import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import productsData from '@/data/products.json';
import { RequestProductButton } from '@/components/RequestProductButton';

export const ProductDetail = () => {
  const { productCode } = useParams();
  const product = productsData.find(p => p.product_code === productCode);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h2>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28 md:pt-0">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/products">
            <ArrowLeft size={18} className="mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <Card>
              <CardContent className="p-8">
                <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-full h-full object-contain cursor-zoom-in"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.categories.map((cat, idx) => (
                <Badge key={idx} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {product.product_name}
            </h1>

            <p className="product-code text-lg mb-6">{product.product_code}</p>

            {Object.keys(product.specifications).length > 0 && (
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
                  <table className="w-full">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={idx} className="border-b border-border last:border-0">
                          <td className="py-3 text-sm font-medium text-muted-foreground capitalize">
                            {key.replace(/_/g, ' ')}
                          </td>
                          <td className="py-3 text-sm text-foreground text-right">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            )}

            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
                <a href={product.whatsapp_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center">
                  <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                  Enquire on WhatsApp
                </a>
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Need bulk orders or have questions? Contact us for competitive pricing.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <RequestProductButton />
        </div>
      </div>
    </div>
  );
};