'use client';

import { Card } from '@/components/ui/card';
import { StatCard } from '../../components/stat-card';
import {
    Users, TrendingUp, Activity, Smartphone,
    ArrowUpRight, Clock, CheckCircle2, AlertCircle
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const PLATFORM_DATA = [
    { month: 'Jan', users: 1200, revenue: 45000 },
    { month: 'Feb', users: 1800, revenue: 62000 },
    { month: 'Mar', users: 2400, revenue: 78000 },
    { month: 'Apr', users: 3200, revenue: 95000 },
    { month: 'May', users: 4100, revenue: 120000 },
    { month: 'Jun', users: 5000, revenue: 155000 },
];

const RECENT_ACTIVITY = [
    { id: 1, type: 'registration', user: 'Mark Thompson', time: '2 mins ago', status: 'success' },
    { id: 2, type: 'transaction', user: 'GrainCo Ltd', amount: '$4,200', time: '15 mins ago', status: 'success' },
    { id: 3, type: 'alert', message: 'System high load in Region A', time: '40 mins ago', status: 'warning' },
    { id: 4, type: 'registration', user: 'Sarah Green', time: '1 hour ago', status: 'success' },
    { id: 5, type: 'transaction', user: 'EcoFarms', amount: '$1,850', time: '3 hours ago', status: 'success' },
];

export function OverviewSection() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Key Metrics */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    label="Total active users"
                    value="3,675"
                    change="+12.5% vs last month"
                    trend="up"
                    icon={Users}
                />
                <StatCard
                    label="Platform Revenue"
                    value="$155,000"
                    change="+29% vs last month"
                    trend="up"
                    icon={TrendingUp}
                />
                <StatCard
                    label="Active Fields"
                    value="8,420"
                    change="Managed area"
                    trend="neutral"
                    icon={Activity}
                />
                <StatCard
                    label="Active Sessions"
                    value="452"
                    change="Real-time"
                    trend="up"
                    icon={Smartphone}
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Main Growth Chart */}
                <Card className="lg:col-span-2 p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-foreground">User Growth Over Time</h3>
                            <p className="text-xs text-muted-foreground mt-1">Platform scaling performance for the first half of 2026</p>
                        </div>
                        <div className="flex items-center gap-2 p-1.5 bg-muted/30 rounded-lg border border-border">
                            <button className="px-3 py-1 text-xs font-medium rounded-md bg-card shadow-sm text-foreground">Monthly</button>
                            <button className="px-3 py-1 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground">Weekly</button>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={PLATFORM_DATA}>
                            <defs>
                                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
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
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'var(--card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="users"
                                stroke="var(--accent)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#growthGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>

                {/* Recent Activity */}
                <Card className="p-6 bg-card border-border shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {RECENT_ACTIVITY.map((item) => (
                            <div key={item.id} className="flex items-start gap-3">
                                <div className={`mt-1 p-1.5 rounded-full ${item.status === 'success' ? 'bg-accent/10 text-accent' : 'bg-yellow-500/10 text-yellow-500'
                                    }`}>
                                    {item.status === 'success' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <AlertCircle className="h-3.5 w-3.5" />}
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium text-foreground leading-none">
                                        {item.type === 'registration' && `New user: ${item.user}`}
                                        {item.type === 'transaction' && `Sale: ${item.user} - ${item.amount}`}
                                        {item.type === 'alert' && item.message}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="h-3 w-3" />
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors border-t border-border pt-4">
                        View All Logs
                    </button>
                </Card>
            </div>

            {/* Platform Status Indicators */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-4 bg-card border-border shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Activity className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-medium">System Health</p>
                        <p className="text-sm font-bold text-foreground">Operational (99.9%)</p>
                    </div>
                </Card>
                <Card className="p-4 bg-card border-border shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-medium">Market Trends</p>
                        <p className="text-sm font-bold text-foreground">Bullish (+5.4%)</p>
                    </div>
                </Card>
                <Card className="p-4 bg-card border-border shadow-sm flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                        <AlertCircle className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground font-medium">Security Alerts</p>
                        <p className="text-sm font-bold text-foreground">0 Critical Issues</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
