'use client';

import { Card } from '@/components/ui/card';
import { Sprout, TrendingUp, Info, ArrowUpRight, Target, BarChart3 } from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from 'recharts';

const PREDICTION_DATA = [
    { crop: 'Wheat', current: 240, predicted: 285 },
    { crop: 'Corn', current: 180, predicted: 210 },
    { crop: 'Soybeans', current: 120, predicted: 145 },
    { crop: 'Barley', current: 90, predicted: 115 },
];

export function YieldSection() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-2xl font-bold text-foreground font-black">Yield Prediction AI</h2>
                    <p className="text-muted-foreground">Forecasting harvest results based on current field data</p>
                </div>
                <div className="p-2 bg-primary text-primary-foreground rounded-lg shadow-lg shadow-primary/20">
                    <TrendingUp className="h-5 w-5" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6 bg-card border-border shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-8">Crop Yield Forecast (Tons)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={PREDICTION_DATA} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                            <XAxis type="number" hide />
                            <YAxis dataKey="crop" type="category" axisLine={false} tickLine={false} tick={{ fill: 'var(--foreground)', fontWeight: 'bold' }} />
                            <Tooltip
                                cursor={{ fill: 'var(--muted)', opacity: 0.1 }}
                                contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px' }}
                            />
                            <Legend />
                            <Bar dataKey="current" name="Last Season" fill="var(--muted-foreground)" radius={[0, 4, 4, 0]} barSize={12} />
                            <Bar dataKey="predicted" name="Predicted Target" fill="var(--primary)" radius={[0, 4, 4, 0]} barSize={12} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-6 bg-primary/10 border-primary/20 border flex flex-col justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-primary">
                                <Target className="h-5 w-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Efficiency Target</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">94.2%</p>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Platform-wide yield efficiency is up 8.5% this quarter.</p>
                    </Card>
                    <Card className="p-6 bg-accent/10 border-accent/20 border flex flex-col justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-accent">
                                <BarChart3 className="h-5 w-5" />
                                <span className="text-xs font-black uppercase tracking-widest">Market Value</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">$12.4K</p>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">Estimated market value of currently standing crops.</p>
                    </Card>
                    <Card className="p-6 bg-card border-border col-span-full">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-muted rounded-2xl">
                                <Info className="h-6 w-6 text-foreground" />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground">Harvest Recommendation</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                    AI suggests starting the Wheat harvest 3 days earlier than planned to maximize protein content and quality.
                                </p>
                                <button className="mt-3 text-xs font-black text-primary uppercase tracking-widest hover:underline">Accept Recommendation</button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
