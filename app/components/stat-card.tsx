'use client';

import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon?: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

export function StatCard({ label, value, change, icon: Icon, trend = 'neutral' }: StatCardProps) {
  const trendColor = trend === 'up' ? 'text-accent' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground';

  return (
    <Card className="p-6 bg-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-foreground mt-2">{value}</p>
          {change && <p className={`text-sm mt-2 ${trendColor}`}>{change}</p>}
        </div>
        {Icon && <Icon className="h-8 w-8 text-primary" />}
      </div>
    </Card>
  );
}
