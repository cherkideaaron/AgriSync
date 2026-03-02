'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, ShoppingCart, ArrowRight, AlertTriangle, Package2, Droplet, Box } from 'lucide-react';
import Link from 'next/link';

const INVENTORY_ITEMS = [
    { id: 1, name: 'Nitrogen Fertilizer', stock: '250 kg', status: 'Low', min: '500 kg', category: 'Supplies' },
    { id: 2, name: 'Phosphate Blend', stock: '1.2 tons', status: 'Optimal', min: '800 kg', category: 'Supplies' },
    { id: 3, name: 'Irrigation Pipes (P6)', stock: '12 units', status: 'Optimal', min: '5 units', category: 'Equipment' },
    { id: 4, name: 'Wheat Seeds v2', stock: '8 bags', status: 'Critical', min: '20 bags', category: 'Seeds' },
];

export function InventorySection() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground font-black">Inventory & Stock</h2>
                    <p className="text-muted-foreground">Manage your farm's essential supplies and equipment</p>
                </div>
                <Link href="/marketplace">
                    <Button className="bg-primary text-primary-foreground font-bold flex items-center gap-2 rounded-xl py-6 px-8 shadow-xl shadow-primary/20">
                        <ShoppingCart className="h-5 w-5" />
                        Order Supplies
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 overflow-hidden border-border bg-card shadow-sm rounded-2xl">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Resource</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Current Stock</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground">Status</th>
                                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-muted-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {INVENTORY_ITEMS.map((item) => (
                                <tr key={item.id} className="hover:bg-muted/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                <Package2 className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-foreground text-sm">{item.name}</p>
                                                <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">{item.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-bold text-foreground">{item.stock}</p>
                                        <p className="text-[10px] text-muted-foreground">Min required: {item.min}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm ${item.status === 'Optimal' ? 'bg-accent/10 text-accent' :
                                                item.status === 'Low' ? 'bg-orange-500/10 text-orange-500' :
                                                    'bg-destructive/10 text-destructive animate-pulse'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Restock</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>

                <div className="space-y-6">
                    <Card className="p-6 bg-card border-border shadow-sm rounded-2xl">
                        <h3 className="font-black text-foreground uppercase tracking-widest text-xs mb-4">Stock Distribution</h3>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span>Supplies</span>
                                    <span>84%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '84%' }} />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex justify-between text-xs font-bold">
                                    <span>Equipment</span>
                                    <span>42%</span>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full bg-accent" style={{ width: '42%' }} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-destructive/5 border-destructive/20 border-2 rounded-2xl border-dashed">
                        <div className="flex flex-col items-center text-center gap-3">
                            <AlertTriangle className="h-10 w-10 text-destructive" />
                            <h4 className="font-black text-foreground text-sm">Critical Shortage</h4>
                            <p className="text-xs text-muted-foreground">Wheat Seeds v2 stock is below critical threshold. Harvest planning may be affected if not restocked today.</p>
                            <Button variant="destructive" size="sm" className="w-full mt-2 font-black uppercase tracking-widest text-[10px]">Instant Restock</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
