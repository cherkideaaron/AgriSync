'use client';

import { useState } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { ProductCard } from '../components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wheat Seeds',
    category: 'Seeds',
    price: 45,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Organic Fertilizer 50kg',
    category: 'Fertilizer',
    price: 89,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1463123081488-789f99849c48?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Soil Testing Kit',
    category: 'Equipment',
    price: 156,
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Drip Irrigation System',
    category: 'Equipment',
    price: 299,
    rating: 4.7,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Corn Hybrid Seeds',
    category: 'Seeds',
    price: 52,
    rating: 4.5,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1551727041-5b347d65b633?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Pesticide Spray 5L',
    category: 'Chemicals',
    price: 34,
    rating: 4.4,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1628114251105-01e40a049d56?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Mulch 1 Ton Bag',
    category: 'Materials',
    price: 78,
    rating: 4.6,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1621287413661-30ac97f394f4?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Nitrogen Fertilizer 20kg',
    category: 'Fertilizer',
    price: 65,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Seeds', 'Fertilizer', 'Equipment', 'Chemicals', 'Materials'];

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Agricultural Marketplace
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Browse and purchase seeds, fertilizers, equipment, and supplies from trusted suppliers
          </p>

          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6 w-full">
          {/* Sidebar Categories */}
          <div className="mb-8 md:mb-0 md:col-span-1">
            <h2 className="font-semibold text-foreground mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2 md:flex-col md:gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground border-border'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
