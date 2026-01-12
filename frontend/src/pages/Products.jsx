import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import productsData from '@/data/products.json';

export const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const allCategories = useMemo(() => {
    const categories = new Set();
    productsData.forEach(product => {
      product.categories.forEach(cat => categories.add(cat));
    });
    return ['All', ...Array.from(categories).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = productsData;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product =>
        product.categories.includes(selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.product_code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground">Browse our complete catalog of auto spare parts</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by product name or code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} products
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={18} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Categories</h3>
                </div>
                <div className="space-y-2">
                  {allCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <Link key={product.product_code} to={`/products/${product.product_code}`}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex flex-wrap gap-1 mb-2">
                          {product.categories.slice(0, 2).map((cat, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                          {product.product_name}
                        </h3>
                        <p className="product-code mb-4">{product.product_code}</p>
                        <Button asChild variant="default" size="sm" className="mt-auto">
                          <a href={product.whatsapp_url} target="_blank" rel="noopener noreferrer">
                            Enquire on WhatsApp
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center gap-2 px-4">
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};