import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, Settings, Disc, Box, Circle, Hexagon, Layers, Grid3x3 } from 'lucide-react';
import productsData from '@/data/products.json';
import { RequestProductButton } from '@/components/RequestProductButton';

// Icon mapping for categories
const getCategoryIcon = (category) => {
  const iconMap = {
    'PINION': Settings,
    'PTO GEAR': Settings,
    'PTO': Settings,
    'GEAR': Settings,
    'GEAR BOX': Box,
    'CLUTCH BEARING': Circle,
    'CLUTCH PLATE': Disc,
    'CLUTCH DISC': Disc,
    'CLUTCH': Disc,
    'AXLE': Hexagon,
    'AXLE SHAFT': Hexagon,
    'SHAFT': Layers,
    'PTO SHAFT': Layers,
    'DRIVE SHAFT': Layers,
    'SLEEVE': Circle,
    'ARM': Layers,
    'BOGI': Box,
    'BUSH': Circle,
    'BRACKET': Grid3x3,
    'HOUSING': Box,
    'FLYWHEEL HOUSING': Box,
    'DIFF CAGE': Box,
    'DIFF GEAR': Settings,
    'DIFF CROSS': Grid3x3,
    'CROSS': Grid3x3,
    'CROSS PIN': Grid3x3,
    'SPIDER': Grid3x3,
    'SPIDER PIN': Grid3x3,
    'PTO PLATE': Disc,
    'ADAPTOR': Circle,
    'BEARING': Circle,
    'STEEL RING': Circle,
    'FIX BODY': Box,
    'PLATE RING': Disc,
    'SHAFT COMPONENTS': Layers,
    'PZB': Settings,
  };
  
  const Icon = iconMap[category] || Box;
  return Icon;
};

export const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'All');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const productsPerPage = 12;

  // Update selected category when URL param changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      setCurrentPage(1);
    }
  }, [categoryFromUrl]);

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

  // Show only selected category or all categories when "All" is selected
  const displayCategories = useMemo(() => {
    if (selectedCategory === 'All') {
      return allCategories;
    }
    return ['All', selectedCategory];
  }, [selectedCategory, allCategories]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setMobileFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h1>
          <p className="text-base md:text-lg text-muted-foreground">Browse our complete catalog of auto spare parts</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
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
            <div className="flex items-center justify-between md:justify-end gap-4">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </div>
              {/* Mobile filter toggle */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              >
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={18} className="text-primary" />
                  <h3 className="font-semibold text-foreground">Categories</h3>
                </div>
                <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                  {displayCategories.map(category => {
                    const CategoryIcon = category === 'All' ? Grid3x3 : getCategoryIcon(category);
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-secondary text-foreground'
                        }`}
                      >
                        <CategoryIcon size={16} className="flex-shrink-0" />
                        <span className="truncate">{category}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Mobile Filter Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileFilterOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-background border-l border-border shadow-lg">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Filter size={18} className="text-primary" />
                    <h3 className="font-semibold text-foreground">Categories</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileFilterOpen(false)}
                  >
                    <X size={20} />
                  </Button>
                </div>
                <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                  <div className="space-y-2">
                    {displayCategories.map(category => {
                      const CategoryIcon = category === 'All' ? Grid3x3 : getCategoryIcon(category);
                      return (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left px-4 py-3 rounded-md text-sm transition-colors flex items-center gap-3 ${
                            selectedCategory === category
                              ? 'bg-primary text-primary-foreground'
                              : 'hover:bg-secondary text-foreground'
                          }`}
                        >
                          <CategoryIcon size={18} className="flex-shrink-0" />
                          <span className="truncate">{category}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {currentProducts.map(product => (
                <Card key={product.product_code} className="card-hover h-full">
                  <CardContent className="p-4 md:p-6 flex flex-col h-full">
                    <Link to={`/products/${product.product_code}`} className="block">
                      <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.product_name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.categories.slice(0, 2).map((cat, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-sm md:text-base">
                        {product.product_name}
                      </h3>
                      <p className="product-code mb-4">{product.product_code}</p>
                    </Link>
                    <Button asChild variant="default" size="sm" className="mt-auto w-full">
                      <a href={product.whatsapp_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        Enquire on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-6 md:mt-8 flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
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
                  size="sm"
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