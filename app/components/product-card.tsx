'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

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
    <Card className="overflow-hidden bg-card hover:shadow-lg transition-shadow">
      <div className="h-40 bg-muted flex items-center justify-center overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground font-medium">{category}</p>
        <h3 className="font-semibold text-foreground mt-1">{name}</h3>
        <div className="flex items-center gap-1 mt-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm text-foreground">{rating}</span>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-primary">${price}</span>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
