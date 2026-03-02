'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-border bg-background px-4 py-3 md:px-6 md:py-4">
      <Link href="/" className="flex items-center gap-2">
        <Leaf className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-foreground">AgriSync</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/marketplace" className="hidden text-sm text-foreground hover:text-primary md:block">
          Marketplace
        </Link>
        <Link href="/login" className="text-sm text-foreground hover:text-primary">
          Login
        </Link>
        <Link href="/register">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
}
