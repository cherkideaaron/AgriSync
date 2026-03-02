'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Plus, Clock, MapPin, MoreVertical, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const INITIAL_TASKS = [
    { id: 1, title: 'Check Soil Moisture in Zone B', time: '08:00 AM', location: 'North Field', completed: true, priority: 'High' },
    { id: 2, title: 'Apply Irrigation to West sector', time: '10:30 AM', location: 'West Field', completed: false, priority: 'High' },
    { id: 3, title: 'Equipment Maintenance - Tractor v2', time: '01:00 PM', location: 'Workshop', completed: false, priority: 'Medium' },
    { id: 4, title: 'Meet with Fertilizer Supplier', time: '04:00 PM', location: 'Farm Office', completed: false, priority: 'Low' },
    { id: 5, title: 'Final Sector Walkthrough', time: '06:00 PM', location: 'All Fields', completed: false, priority: 'Medium' },
];

export function TasksSection() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground font-black">Daily Operations</h2>
                    <p className="text-muted-foreground">Automated and manual task scheduling for {new Date().toLocaleDateString()}</p>
                </div>
                <Button className="bg-primary text-primary-foreground font-bold flex items-center gap-2 rounded-xl py-6 px-6">
                    <Plus className="h-5 w-5" />
                    Add Manual Task
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar stats */}
                <div className="lg:col-span-1 space-y-4">
                    <Card className="p-6 bg-primary text-primary-foreground border-none shadow-xl shadow-primary/20 rounded-2xl text-center">
                        <p className="text-7xl font-black">{tasks.filter(t => !t.completed).length}</p>
                        <p className="text-xs font-black uppercase tracking-widest mt-2 opacity-80">Remaining Tasks</p>
                    </Card>
                    <Card className="p-6 bg-card border-border rounded-2xl">
                        <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Focus Priority</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-destructive" />
                                    High
                                </span>
                                <span className="text-xs font-bold">{tasks.filter(t => t.priority === 'High' && !t.completed).length}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-400" />
                                    Medium
                                </span>
                                <span className="text-xs font-bold">{tasks.filter(t => t.priority === 'Medium' && !t.completed).length}</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Task List */}
                <div className="lg:col-span-3 space-y-4">
                    {tasks.map((task) => (
                        <Card
                            key={task.id}
                            className={cn(
                                "p-4 border-2 transition-all duration-300 group cursor-pointer",
                                task.completed ? "border-accent/10 bg-accent/5 opacity-70" : "border-transparent bg-card hover:border-primary/20 hover:shadow-lg"
                            )}
                            onClick={() => toggleTask(task.id)}
                        >
                            <div className="flex items-center gap-4">
                                <div className={cn(
                                    "flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                                    task.completed ? "bg-accent text-accent-foreground" : "border-2 border-muted text-muted-foreground group-hover:border-primary"
                                )}>
                                    {task.completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
                                </div>
                                <div className="flex-1">
                                    <h4 className={cn(
                                        "font-black text-sm transition-all",
                                        task.completed ? "text-muted-foreground line-through decoration-2" : "text-foreground"
                                    )}>
                                        {task.title}
                                    </h4>
                                    <div className="flex items-center gap-4 mt-1">
                                        <div className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                                            <Clock className="h-3 w-3" />
                                            {task.time}
                                        </div>
                                        <div className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                                            <MapPin className="h-3 w-3" />
                                            {task.location}
                                        </div>
                                    </div>
                                </div>
                                <div className={cn(
                                    "px-2 px-1 rounded text-[8px] font-black uppercase tracking-tighter shadow-sm",
                                    task.priority === 'High' ? "bg-destructive/10 text-destructive" :
                                        task.priority === 'Medium' ? "bg-orange-500/10 text-orange-500" : "bg-muted text-muted-foreground"
                                )}>
                                    {task.priority}
                                </div>
                                <button className="p-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                                    <MoreVertical className="h-4 w-4" />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
