'use client';

import { Card } from '@/components/ui/card';
import { StatCard } from '../../components/stat-card';
import {
    TrendingUp, Droplet, Sprout, CloudSun,
    Calendar, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2
} from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';

const SOIL_DATA = [
    { day: 'Mon', moisture: 65, temp: 22 },
    { day: 'Tue', moisture: 68, temp: 23 },
    { day: 'Wed', moisture: 72, temp: 24 },
    { day: 'Thu', moisture: 70, temp: 22 },
    { day: 'Fri', moisture: 75, temp: 25 },
    { day: 'Sat', moisture: 78, temp: 26 },
    { day: 'Sun', moisture: 76, temp: 25 },
];

const UPCOMING_TASKS = [
    { id: 1, task: 'Irrigation - North Field', time: '10:00 AM', status: 'pending' },
    { id: 2, task: 'Fertilizer Application', time: '02:00 PM', status: 'pending' },
    { id: 3, task: 'Soil Health Check', time: 'Completed', status: 'done' },
];

export function OverviewSection() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Quick Action Welcome */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sprout className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Good Morning, Aaron!</h2>
                        <p className="text-sm text-muted-foreground">Conditions are optimal for harvesting in the West Sector today.</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-card border border-border rounded-xl text-center">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Weather</p>
                        <div className="flex items-center gap-2">
                            <CloudSun className="h-4 w-4 text-orange-400" />
                            <span className="font-bold text-foreground">24°C</span>
                        </div>
                    </div>
                    <div className="px-4 py-2 bg-card border border-border rounded-xl text-center">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Moisture</p>
                        <div className="flex items-center gap-2">
                            <Droplet className="h-4 w-4 text-blue-400" />
                            <span className="font-bold text-foreground">72%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    label="Estimated Yield"
                    value="485 tons"
                    change="+12% from last year"
                    trend="up"
                    icon={TrendingUp}
                />
                <StatCard
                    label="Avg Soil Moisture"
                    value="72.4%"
                    change="Optimal Range"
                    trend="neutral"
                    icon={Droplet}
                />
                <StatCard
                    label="Fertilizer Stock"
                    value="1.2 tons"
                    change="Low Stock alert"
                    trend="down"
                />
                <StatCard
                    label="Farm Health"
                    value="Great"
                    change="No pests detected"
                    trend="up"
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Soil Trends */}
                <Card className="lg:col-span-2 p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-foreground">Weekly Soil Trends</h3>
                            <p className="text-xs text-muted-foreground mt-1">Real-time data from root-zone sensors</p>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-medium">
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span>Moisture %</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="h-2 w-2 rounded-full bg-orange-400" />
                                <span>Temp °C</span>
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={SOIL_DATA}>
                            <defs>
                                <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                            <XAxis
                                dataKey="day"
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
                                    borderRadius: '12px'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="moisture"
                                stroke="var(--primary)"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#moistureGradient)"
                            />
                            <Line
                                type="monotone"
                                dataKey="temp"
                                stroke="#fbbf24"
                                strokeWidth={2}
                                dot={{ fill: '#fbbf24' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>

                {/* Schedule */}
                <Card className="p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-foreground">Today's Schedule</h3>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="space-y-6">
                        {UPCOMING_TASKS.map((item) => (
                            <div key={item.id} className="flex items-start gap-3">
                                <div className={`mt-1 p-1.5 rounded-full ${item.status === 'done' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                                    }`}>
                                    {item.status === 'done' ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-medium leading-none ${item.status === 'done' ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                                        {item.task}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-3 bg-muted/50 hover:bg-muted text-sm font-semibold rounded-xl text-foreground transition-colors border border-border">
                        Full Schedule
                    </button>
                </Card>
            </div>
        </div>
    );
}
