'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

export function ProductCard({ id, name, category, price, rating, reviews, image }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-[2rem]">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 backdrop-blur-md bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-all">
            <Eye className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 backdrop-blur-md bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary transition-all">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm border border-white/40">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1.5 mb-2">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground font-medium">({reviews} reviews)</span>
        </div>

        <h3 className="font-black text-foreground text-lg leading-tight mb-4 group-hover:text-primary transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Price</span>
            <span className="text-2xl font-black text-primary tracking-tighter">${price}</span>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest text-[10px] rounded-xl px-4 py-6 shadow-xl shadow-primary/20">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
