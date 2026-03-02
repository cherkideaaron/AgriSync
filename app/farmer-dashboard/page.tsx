'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Leaf, BarChart3, Droplet, TrendingUp, LogOut, Menu, X, CloudSun, Package, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OverviewSection } from './components/overview-section';
import { SoilSection } from './components/soil-section';
import { YieldSection } from './components/yield-section';
import { WeatherSection } from './components/weather-section';
import { InventorySection } from './components/inventory-section';
import { TasksSection } from './components/tasks-section';

type FarmerTab = 'overview' | 'soil' | 'yield' | 'weather' | 'inventory' | 'tasks';

const SIDEBAR_ITEMS = [
  { label: 'Overview', id: 'overview' as FarmerTab, icon: BarChart3 },
  { label: 'Soil Monitoring', id: 'soil' as FarmerTab, icon: Droplet },
  { label: 'Yield Prediction', id: 'yield' as FarmerTab, icon: TrendingUp },
  { label: 'Weather', id: 'weather' as FarmerTab, icon: CloudSun },
  { label: 'Inventory', id: 'inventory' as FarmerTab, icon: Package },
  { label: 'Daily Tasks', id: 'tasks' as FarmerTab, icon: ClipboardList },
];

export default function FarmerDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<FarmerTab>('overview');
  const [userName, setUserName] = useState('Aaron');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const name = localStorage.getItem('userName') || 'Aaron';
    const role = localStorage.getItem('userRole');

    if (!role || role !== 'farmer') {
      router.push('/login');
    } else {
      setUserName(name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    router.push('/');
  };

  if (!mounted) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewSection />;
      case 'soil': return <SoilSection />;
      case 'yield': return <YieldSection />;
      case 'weather': return <WeatherSection />;
      case 'inventory': return <InventorySection />;
      case 'tasks': return <TasksSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background overflow-hidden font-sans">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card z-50">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-foreground">AgriSync</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-foreground p-2 hover:bg-muted rounded-md"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border z-50 transition-transform duration-300 md:relative md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="hidden md:flex items-center gap-2 p-6 mb-8 border-b border-sidebar-border">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-black text-2xl tracking-tighter text-sidebar-foreground">AgriSync</span>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 group text-left",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 scale-[1.02]"
                      : "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "animate-pulse" : "group-hover:rotate-12 transition-transform")} />
                  <span className="font-bold text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full flex items-center justify-center gap-2 rounded-2xl py-6 text-destructive hover:bg-destructive/10 hover:text-destructive font-bold"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#f8fafc]/50">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between px-10 py-6 bg-transparent z-10">
          <div>
            <h1 className="text-3xl font-black text-foreground tracking-tight capitalize">{activeTab.replace('-', ' ')}</h1>
            <p className="text-sm text-muted-foreground font-medium">Monitoring your agricultural ecosystem</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-sm border border-border">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
              {userName.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-black text-foreground">{userName}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Premium Farmer</p>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto px-4 md:px-10 pb-12 scroll-smooth">
          <div className="max-w-[1400px] mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

