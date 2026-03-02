'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Download, Calendar, TrendingUp, Users, ShoppingCart, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const REVENUE_DATA = [
    { month: 'Jan', revenue: 45000, target: 40000 },
    { month: 'Feb', revenue: 62000, target: 55000 },
    { month: 'Mar', revenue: 78000, target: 70000 },
    { month: 'Apr', revenue: 95000, target: 85000 },
    { month: 'May', revenue: 120000, target: 100000 },
    { month: 'Jun', revenue: 155000, target: 130000 },
];

const PERFORMANCE_METRICS = [
    { label: 'Conversion Rate', value: '4.8%', change: '+0.5%', trend: 'up' },
    { label: 'Avg Order Value', value: '$240', change: '+12%', trend: 'up' },
    { label: 'Customer Churn', value: '1.2%', change: '-0.3%', trend: 'down' },
    { label: 'Session Duration', value: '4m 32s', change: '+20s', trend: 'up' },
];

export function AnalyticsSection() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Platform Analytics</h2>
                    <p className="text-muted-foreground">Deep dive into performance metrics and platform growth</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Last 6 Months
                    </Button>
                    <Button className="flex items-center gap-2 bg-primary text-primary-foreground">
                        <Download className="h-4 w-4" />
                        Export Data
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {PERFORMANCE_METRICS.map((metric) => (
                    <Card key={metric.label} className="p-4 bg-card border-border shadow-sm">
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <div className="flex items-end justify-between mt-2">
                            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                            <span className={`flex items-center text-xs font-medium ${metric.trend === 'up' ? 'text-accent' : 'text-destructive'
                                }`}>
                                {metric.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                                {metric.change}
                            </span>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-foreground">Revenue vs Target</h3>
                        <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-primary" />
                                <span>Actual Revenue</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="h-3 w-3 rounded-full bg-muted" />
                                <span>Monthly Target</span>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <AreaChart data={REVENUE_DATA}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'var(--card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '8px',
                                    color: 'var(--foreground)'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="var(--primary)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorRevenue)"
                            />
                            <Line
                                type="monotone"
                                dataKey="target"
                                stroke="var(--muted)"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="p-6 bg-card border-border shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Activity Breakdown</h3>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Marketplace Sales</span>
                                <span className="font-medium text-foreground">64%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary rounded-full" style={{ width: '64%' }} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">User Subscriptions</span>
                                <span className="font-medium text-foreground">22%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-accent rounded-full" style={{ width: '22%' }} />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">API Usage</span>
                                <span className="font-medium text-foreground">14%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 rounded-full" style={{ width: '14%' }} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-muted/30 rounded-lg border border-border">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Projected Growth</p>
                                <p className="text-sm font-semibold text-foreground">+18% next quarter</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
