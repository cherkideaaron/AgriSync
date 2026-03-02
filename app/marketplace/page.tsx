'use client';

import { useState } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { ProductCard } from '../components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wheat Seeds',
    category: 'Seeds',
    price: 45,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1663025293688-322e16b6cb66?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Organic Fertilizer 50kg',
    category: 'Fertilizer',
    price: 89,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1641568159866-2321c4a8fe59?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Mulch 1 Ton Bag',
    category: 'Materials',
    price: 78,
    rating: 4.6,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1585914966084-71f0c43f3053?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Nitrogen Fertilizer 20kg',
    category: 'Fertilizer',
    price: 65,
    rating: 4.7,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1628114241854-d13492582736?q=80&w=800&auto=format&fit=crop',
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
    <div className="min-h-screen bg-[#fcfdf2] font-sans selection:bg-primary/30">
      <Navbar />

      {/* Stunning Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-primary shadow-[inset_0_-100px_100px_-50px_rgba(34,197,94,0.3)]">
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-[-10%] right-[-10%] h-96 w-96 bg-accent opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] h-80 w-80 bg-white opacity-10 blur-[100px] rounded-full" />

        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
          <Link href="/farmer-dashboard" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Dashboard</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            AGRICULTURAL<br /><span className="text-accent underline decoration-8 decoration-accent/30 underline-offset-8">MARKETPLACE</span>
          </h1>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Direct access to premium verified agricultural supplies, precision seeds, and high-performance IOT equipment.
          </p>

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
              <Input
                type="text"
                placeholder="What do your crops need today?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-16 pl-14 bg-white/10 backdrop-blur-xl border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:ring-accent focus:border-accent text-lg font-bold"
              />
            </div>
            <Button className="h-16 px-10 bg-accent text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-primary transition-all shadow-2xl shadow-accent/30">
              Search Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Main Catalog View */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-72 space-y-12 h-fit lg:sticky lg:top-32">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black text-foreground uppercase tracking-widest">Categories</h2>
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all text-left",
                      selectedCategory === category
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                        : "bg-white text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-accent/5 rounded-3xl border border-accent/10 relative overflow-hidden group">
              <div className="absolute top-[-20px] right-[-20px] opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <ShoppingBag className="h-32 w-32 text-accent" />
              </div>
              <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-2 relative z-10">Bulk Order Discount</h3>
              <p className="text-xs text-muted-foreground mb-4 relative z-10 font-bold">15% off all seed orders over $500 this week!</p>
              <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-black uppercase tracking-widest text-[9px] relative z-10">Learn More</Button>
            </div>
          </aside>

          {/* Product Grid Container */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-border/50">
              <div>
                <h2 className="text-2xl font-black text-foreground tracking-tighter uppercase">{selectedCategory} Catalog</h2>
                <p className="text-xs font-bold text-muted-foreground mt-1">Found {filteredProducts.length} Premium Products</p>
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-transparent text-xs font-black uppercase tracking-widest text-muted-foreground border-none focus:ring-0 cursor-pointer">
                  <option>Newest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-border flex flex-col items-center gap-6 shadow-sm">
                <div className="p-6 bg-muted rounded-full">
                  <Search className="h-12 w-12 text-muted-foreground opacity-30" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground uppercase tracking-tight">No products detected</h3>
                  <p className="text-muted-foreground font-bold mt-2">Adjust your filters or search keywords to find what you need.</p>
                </div>
                <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} variant="outline" className="font-black uppercase tracking-widest text-xs px-10 border-2">Reset Browsing</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
