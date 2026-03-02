'use client';

import { Card } from '@/components/ui/card';
import { Droplet, Thermometer, Sprout, AlertCircle, RefreshCw, Map as MapIcon, Info, Radio } from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { useState } from 'react';

const ZONE_DATA = [
    { zone: 'Zone A', moisture: 72, crop: 'Maize', color: '#fbbf24' }, // Amber
    { zone: 'Zone B', moisture: 45, crop: 'Sorghum', color: '#a855f7' }, // Purple
    { zone: 'Zone C', moisture: 85, crop: 'Wheat', color: '#22c55e' }, // Green
    { zone: 'Zone D', moisture: 68, crop: 'Maize', color: '#fbbf24' },
    { zone: 'Zone E', moisture: 74, crop: 'Barley', color: '#f97316' }, // Orange
];

const ESP_LOCATIONS = [
    { id: 1, top: '25%', left: '30%', status: 'online' },
    { id: 2, top: '60%', left: '45%', status: 'online' },
    { id: 3, top: '40%', left: '75%', status: 'online' },
    { id: 4, top: '80%', left: '20%', status: 'online' },
];

export function SoilSection() {
    const [activeZone, setActiveZone] = useState<string | null>(null);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-foreground font-black uppercase tracking-tighter">Farm Digital Twin</h2>
                    <p className="text-muted-foreground">Interactive map and live ESP sensor telemetry</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-black uppercase tracking-widest border border-accent/20">
                    <Radio className="h-3 w-3 animate-pulse" />
                    4 Live ESP Channels
                </div>
            </div>

            {/* Farm Map Section */}
            <Card className="p-0 overflow-hidden border-border bg-card shadow-xl rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[550px]">
                    {/* Map Interaction Area */}
                    <div className="lg:col-span-3 bg-muted/20 relative p-8 flex items-center justify-center group overflow-hidden">
                        {/* Patterned Background */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl border border-border shadow-sm">
                            <MapIcon className="h-4 w-4 text-primary" />
                            <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Satellite Topology</span>
                        </div>

                        {/* Map Vector (Fenced Plots) */}
                        <div className="relative w-full max-w-2xl aspect-[16/10] bg-[#cbd5e1] rounded-[2.5rem] border-[12px] border-white shadow-2xl overflow-hidden transform transition-transform group-hover:scale-[1.01] duration-500">
                            <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] p-3 bg-white/20">
                                {/* Plot 1: Maize */}
                                <div
                                    className="bg-amber-400/90 hover:bg-amber-400 transition-all cursor-pointer border-4 border-transparent hover:border-white/40 rounded-tl-[1.5rem] flex items-center justify-center group/plot shadow-inner"
                                    onMouseEnter={() => setActiveZone('Zone A - Maize')}
                                >
                                    <span className="text-[10px] font-black text-amber-900 opacity-20 group-hover/plot:opacity-100 transition-opacity tracking-widest">MAIZE</span>
                                </div>
                                {/* Plot 2: Sorghum */}
                                <div
                                    className="bg-purple-500/90 hover:bg-purple-500 transition-all cursor-pointer border-4 border-transparent hover:border-white/40 flex items-center justify-center group/plot shadow-inner"
                                    onMouseEnter={() => setActiveZone('Zone B - Sorghum')}
                                >
                                    <span className="text-[10px] font-black text-white opacity-20 group-hover/plot:opacity-100 transition-opacity tracking-widest">SORGHUM</span>
                                </div>
                                {/* Road/Infrastructure */}
                                <div className="bg-slate-400/30 border-4 border-transparent rounded-tr-[1.5rem] relative overflow-hidden">
                                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 border-t border-dashed border-white/40" />
                                </div>
                                {/* Plot 3: Wheat */}
                                <div
                                    className="bg-green-500/90 hover:bg-green-500 transition-all cursor-pointer border-4 border-transparent hover:border-white/40 rounded-bl-[1.5rem] flex items-center justify-center group/plot shadow-inner"
                                    onMouseEnter={() => setActiveZone('Zone C - Wheat')}
                                >
                                    <span className="text-[10px] font-black text-white opacity-20 group-hover/plot:opacity-100 transition-opacity tracking-widest">WHEAT</span>
                                </div>
                                {/* Plot 4: Barley */}
                                <div
                                    className="bg-orange-500/90 hover:bg-orange-500 transition-all cursor-pointer border-4 border-transparent hover:border-white/40 flex items-center justify-center group/plot shadow-inner"
                                    onMouseEnter={() => setActiveZone('Zone E - Barley')}
                                >
                                    <span className="text-[10px] font-black text-white opacity-20 group-hover/plot:opacity-100 transition-opacity tracking-widest">BARLEY</span>
                                </div>
                                {/* Plot 5: Maize */}
                                <div
                                    className="bg-amber-400/90 hover:bg-amber-400 transition-all cursor-pointer border-4 border-transparent hover:border-white/40 rounded-br-[1.5rem] flex items-center justify-center group/plot shadow-inner"
                                    onMouseEnter={() => setActiveZone('Zone D - Maize')}
                                >
                                    <span className="text-[10px] font-black text-amber-900 opacity-20 group-hover/plot:opacity-100 transition-opacity tracking-widest">MAIZE</span>
                                </div>
                            </div>

                            {/* ESP Live Indicators */}
                            {ESP_LOCATIONS.map((esp) => (
                                <div
                                    key={esp.id}
                                    className="absolute h-5 w-5 bg-green-500 border-[3px] border-white rounded-full transition-all hover:scale-150 cursor-pointer shadow-lg z-20"
                                    style={{ top: esp.top, left: esp.left }}
                                >
                                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 scale-150" />
                                    <div className="hidden group-hover:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] font-black px-2 py-1 rounded whitespace-nowrap uppercase tracking-widest">
                                        ESP #{esp.id} Live
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Farm Information Sidebar */}
                    <div className="p-8 border-l border-border bg-card space-y-10">
                        <div>
                            <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-6">Farm Metrics</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Total Coverage</p>
                                    <p className="text-4xl font-black text-primary tracking-tighter">150.8 <span className="text-lg font-bold opacity-60">Acres</span></p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-muted/50 rounded-2xl border border-border/50">
                                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">Active Plots</p>
                                        <p className="text-xl font-black">05</p>
                                    </div>
                                    <div className="p-4 bg-muted/50 rounded-2xl border border-border/50">
                                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest mb-1">IoT Nodes</p>
                                        <p className="text-xl font-black">04</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-border/50">
                            <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-6">Crop Allocation</h3>
                            <div className="space-y-4">
                                {[
                                    { label: 'Maize', val: 42, color: 'bg-amber-400' },
                                    { label: 'Sorghum', val: 18, color: 'bg-purple-500' },
                                    { label: 'Wheat', val: 25, color: 'bg-green-500' },
                                    { label: 'Barley', val: 15, color: 'bg-orange-500' },
                                ].map((crop) => (
                                    <div key={crop.label} className="space-y-2">
                                        <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider">
                                            <div className="flex items-center gap-2">
                                                <div className={cn("h-2.5 w-2.5 rounded-full", crop.color)} />
                                                {crop.label}
                                            </div>
                                            <span className="text-muted-foreground">{crop.val}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                            <div className={cn("h-full rounded-full transition-all duration-1000", crop.color)} style={{ width: `${crop.val}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-5 bg-primary/5 border border-primary/10 rounded-2xl flex items-start gap-3">
                            <Info className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <p className="text-[10px] font-bold text-foreground/80 leading-relaxed uppercase tracking-tight">
                                Interactive Topology: Select zones for detailed sub-surface telemetry.
                            </p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Sensor Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <Card className="p-8 bg-card border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow rounded-3xl group">
                    <div className="p-4 bg-blue-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                        <Droplet className="h-10 w-10 text-blue-500" />
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Live Moisture</p>
                    <p className="text-5xl font-black text-foreground mt-3 tracking-tighter">68.5<span className="text-2xl opacity-40 font-bold">%</span></p>
                    <div className="mt-4 px-3 py-1 bg-accent/10 rounded-full text-[10px] font-black text-accent uppercase tracking-widest">+2.1% (Trend)</div>
                </Card>
                <Card className="p-8 bg-card border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow rounded-3xl group">
                    <div className="p-4 bg-orange-500/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                        <Thermometer className="h-10 w-10 text-orange-500" />
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Soil Gradient</p>
                    <p className="text-5xl font-black text-foreground mt-3 tracking-tighter">22.4<span className="text-2xl opacity-40 font-bold">°C</span></p>
                    <div className="mt-4 px-3 py-1 bg-muted rounded-full text-[10px] font-black text-muted-foreground uppercase tracking-widest">Normal Range</div>
                </Card>
                <Card className="p-8 bg-card border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow rounded-3xl group">
                    <div className="p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                        <Sprout className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Bio-Optimality</p>
                    <p className="text-5xl font-black text-foreground mt-3 tracking-tighter uppercase">Peak</p>
                    <div className="mt-4 px-3 py-1 bg-accent/10 rounded-full text-[10px] font-black text-accent uppercase tracking-widest">PH 6.8 (Healthy)</div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-8 bg-card border-border shadow-sm rounded-3xl">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-lg font-black text-foreground uppercase tracking-tight">Zone Moisture Breakdown</h3>
                            <p className="text-xs text-muted-foreground mt-1 font-medium">Comparative telemetry across active plots</p>
                        </div>
                        <button className="h-10 w-10 flex items-center justify-center bg-muted hover:bg-primary hover:text-white rounded-xl transition-all">
                            <RefreshCw className="h-5 w-5" />
                        </button>
                    </div>
                    <ResponsiveContainer width="100%" height={320}>
                        <BarChart data={ZONE_DATA}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" opacity={0.5} />
                            <XAxis dataKey="zone" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 10, fontWeight: 'bold' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 10, fontWeight: 'bold' }} dx={-10} />
                            <Tooltip
                                cursor={{ fill: 'var(--muted)', opacity: 0.1 }}
                                contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', fontWeight: 'bold' }}
                            />
                            <Bar dataKey="moisture" radius={[8, 8, 8, 8]} barSize={40}>
                                {ZONE_DATA.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <div className="space-y-5">
                    <h3 className="text-lg font-black text-foreground uppercase tracking-tight">Active Sensor Alerts</h3>
                    <Card className="p-6 bg-destructive/5 border border-destructive/10 rounded-3xl flex items-start gap-5 group hover:bg-destructive/10 transition-colors cursor-pointer">
                        <div className="p-3 bg-destructive/10 rounded-2xl group-hover:scale-110 transition-transform">
                            <AlertCircle className="h-6 w-6 text-destructive" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-black text-foreground uppercase tracking-tighter">Zone B: Critical Low</p>
                                <span className="text-[8px] font-black text-destructive p-1 border border-destructive/20 rounded">EMERGENCY</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Sorghum plot detected <span className="text-destructive font-black">45%</span> moisture. Irrigation cycle requested immediately via ESP Node #2.</p>
                            <button className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-destructive hover:underline">Execute Irrigation</button>
                        </div>
                    </Card>
                    <Card className="p-6 bg-primary/5 border border-primary/10 rounded-3xl flex items-start gap-5 group hover:bg-primary/10 transition-colors">
                        <div className="p-3 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                            <Sprout className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-black text-foreground uppercase tracking-tighter">Zone E: Nutrient Cycle Complete</p>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">Barley plot automatic fertilization cycle finished successfully. Next check in 6 hours.</p>
                        </div>
                    </Card>
                    <Card className="p-6 bg-muted/20 border border-border/50 rounded-3xl flex items-start gap-5 group hover:bg-muted/30 transition-colors">
                        <div className="p-3 bg-muted rounded-2xl group-hover:scale-110 transition-transform">
                            <Radio className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-black text-foreground uppercase tracking-tighter">OTA Protocol: Updated</p>
                            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">All 4 field ESP nodes updated to v2.4.5 over-the-air. Latency reduced by 14ms.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
