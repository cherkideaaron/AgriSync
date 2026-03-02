'use client';

import { Card } from '@/components/ui/card';
import { CloudSun, CloudRain, Thermometer, Wind, Droplet, Sun, Zap, Navigation } from 'lucide-react';

const WEEKLY_FORECAST = [
    { day: 'Mon', temp: 24, low: 18, condition: 'Sunny', icon: Sun },
    { day: 'Tue', temp: 22, low: 16, condition: 'Partly Cloudy', icon: CloudSun },
    { day: 'Wed', temp: 19, low: 14, condition: 'Shower', icon: CloudRain },
    { day: 'Thu', temp: 21, low: 15, condition: 'Cloudy', icon: CloudSun },
    { day: 'Fri', temp: 25, low: 19, condition: 'Clear', icon: Sun },
    { day: 'Sat', temp: 27, low: 20, condition: 'Hot', icon: Sun },
    { day: 'Sun', temp: 23, low: 17, condition: 'Storm', icon: Zap },
];

export function WeatherSection() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h2 className="text-2xl font-bold text-foreground font-black">Weather Command</h2>
                <p className="text-muted-foreground">Localized hyper-weather forecasting for your farm</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Current Weather */}
                <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-none relative overflow-hidden shadow-2xl shadow-primary/30">
                    <Zap className="absolute top-[-10px] right-[-10px] h-48 w-48 text-white/5 rotate-12" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-2">Current Location: North Fields</p>
                            <h3 className="text-7xl font-black mb-2">24°</h3>
                            <p className="text-2xl font-bold opacity-90">Cloudy with intervals of sun</p>
                            <div className="flex gap-4 mt-8">
                                <div className="flex items-center gap-1 opacity-80">
                                    <Wind className="h-4 w-4" />
                                    <span className="text-sm font-bold">12km/h</span>
                                </div>
                                <div className="flex items-center gap-1 opacity-80">
                                    <Droplet className="h-4 w-4" />
                                    <span className="text-sm font-bold">64% Humidity</span>
                                </div>
                                <div className="flex items-center gap-1 opacity-80">
                                    <Navigation className="h-4 w-4" />
                                    <span className="text-sm font-bold">NW</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-40 w-40 flex items-center justify-center">
                            <CloudSun className="h-32 w-32 drop-shadow-2xl animate-pulse" />
                        </div>
                    </div>
                </Card>

                {/* Forecast List */}
                <Card className="p-6 bg-card border-border shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-6">7-Day Forecast</h3>
                    <div className="space-y-4">
                        {WEEKLY_FORECAST.map((day) => (
                            <div key={day.day} className="flex items-center justify-between group hover:bg-muted/50 p-2 rounded-xl transition-colors cursor-default">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-black w-8 text-foreground">{day.day}</span>
                                    <day.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-bold text-foreground">{day.temp}°</span>
                                    <span className="text-sm font-medium text-muted-foreground">{day.low}°</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Alerts */}
            <Card className="p-6 bg-orange-500/10 border-orange-500/20 border flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-orange-500 rounded-full text-white">
                        <Zap className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-foreground">Heavy rain expected Wednesday</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Prepare drainage systems in Sector C and D.</p>
                    </div>
                </div>
                <button className="px-4 py-2 bg-orange-500 text-white text-xs font-black uppercase tracking-widest rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">Acknowledged</button>
            </Card>
        </div>
    );
}
