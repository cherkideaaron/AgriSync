'use client';

import { Card } from '@/components/ui/card';
import { Droplet, Thermometer, Wind, Sprout, AlertCircle, RefreshCw } from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const ZONE_DATA = [
    { zone: 'Zone A', moisture: 72, health: 'Optimal' },
    { zone: 'Zone B', moisture: 45, health: 'Dry' },
    { zone: 'Zone C', moisture: 85, health: 'Saturated' },
    { zone: 'Zone D', moisture: 68, health: 'Optimal' },
    { zone: 'Zone E', moisture: 74, health: 'Optimal' },
];

export function SoilSection() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-foreground font-black">Soil Real-Time Monitoring</h2>
                <p className="text-muted-foreground">Detailed sensor telemetry from all active crop zones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="p-3 bg-blue-500/10 rounded-2xl mb-4">
                        <Droplet className="h-8 w-8 text-blue-500" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Avg Moisture</p>
                    <p className="text-4xl font-black text-foreground mt-2">68.5%</p>
                    <p className="text-xs text-accent mt-2 font-bold">+2.1% from yesterday</p>
                </Card>
                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="p-3 bg-orange-500/10 rounded-2xl mb-4">
                        <Thermometer className="h-8 w-8 text-orange-500" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Soil Temp</p>
                    <p className="text-4xl font-black text-foreground mt-2">22.4°C</p>
                    <p className="text-xs text-muted-foreground mt-2 font-bold">Stable range</p>
                </Card>
                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-2xl mb-4">
                        <Sprout className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Nutrient Level</p>
                    <p className="text-4xl font-black text-foreground mt-2">Optimal</p>
                    <p className="text-xs text-accent mt-2 font-bold">PH 6.8 (Healthy)</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-foreground leading-none">Moisture by Zone</h3>
                        <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                            <RefreshCw className="h-3 w-3" />
                            Refresh Data
                        </button>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ZONE_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                            <XAxis dataKey="zone" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px' }}
                            />
                            <Bar dataKey="moisture" radius={[6, 6, 0, 0]}>
                                {ZONE_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.moisture < 50 ? '#ef4444' : entry.moisture > 80 ? '#3b82f6' : 'var(--primary)'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Recent Zone Alerts</h3>
                    <Card className="p-4 bg-destructive/5 border border-destructive/20 rounded-2xl flex items-start gap-4">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-foreground leading-none">Zone B: Critical Low Moisture</p>
                            <p className="text-xs text-muted-foreground mt-1">Sensor detected 45% moisture. Irrigation suggested immediately.</p>
                            <button className="mt-3 text-xs font-black uppercase tracking-widest text-destructive hover:underline">Start Irrigation</button>
                        </div>
                    </Card>
                    <Card className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-4">
                        <Sprout className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-foreground leading-none">Zone E: Nutrient Boost Complete</p>
                            <p className="text-xs text-muted-foreground mt-1">Automatic fertilization cycle finished successfully.</p>
                        </div>
                    </Card>
                    <Card className="p-4 bg-muted/30 border border-border rounded-2xl flex items-start gap-4">
                        <RefreshCw className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                            <p className="text-sm font-bold text-foreground leading-none">Sensor Firmware Update</p>
                            <p className="text-xs text-muted-foreground mt-1">All zone sensors updated to v2.4.5</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
