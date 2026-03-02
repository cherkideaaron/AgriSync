'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { FeatureCard } from './components/feature-card';
import {
  BarChart3,
  Droplet,
  TrendingUp,
  ShoppingCart,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground text-balance">
                  Smart Farming for the Modern Era
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
                  AgriSync helps farmers optimize crop yields, monitor soil health, and connect with suppliers in one intelligent platform.
                </p>
              </div>
              <div className="flex gap-4 justify-start flex-wrap">
                <Link href="/register">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline">
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop"
                alt="Modern Farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-secondary/5">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose AgriSync?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed specifically for agricultural operations
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Droplet}
              title="Real-time Soil Monitoring"
              description="Track soil moisture, temperature, and pH levels to optimize irrigation and crop health"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Yield Prediction"
              description="AI-powered predictions help forecast crop yields and plan harvesting strategies"
            />
            <FeatureCard
              icon={BarChart3}
              title="Advanced Analytics"
              description="Detailed insights into farm performance with customizable dashboards and reports"
            />
            <FeatureCard
              icon={ShoppingCart}
              title="Marketplace"
              description="Connect directly with suppliers and buyers to sell your produce efficiently"
            />
            <FeatureCard
              icon={Users}
              title="Community Support"
              description="Access expert advice and connect with other farmers in the AgriSync network"
            />
            <FeatureCard
              icon={Zap}
              title="Automation"
              description="Automate routine farm management tasks to save time and reduce costs"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">50K+</p>
              <p className="text-muted-foreground mt-2">Active Farmers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">25M+</p>
              <p className="text-muted-foreground mt-2">Data Points</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground mt-2">Uptime</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">$2B+</p>
              <p className="text-muted-foreground mt-2">Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of farmers already using AgriSync to increase productivity
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
