'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Leaf, LogOut, Menu, X, BarChart3, Users, TrendingUp, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OverviewSection } from './components/overview-section';
import { UsersSection } from './components/users-section';
import { AnalyticsSection } from './components/analytics-section';
import { SettingsSection } from './components/settings-section';

type AdminTab = 'overview' | 'users' | 'analytics' | 'settings';

const SIDEBAR_ITEMS = [
  { label: 'Overview', id: 'overview' as AdminTab, icon: BarChart3 },
  { label: 'Users', id: 'users' as AdminTab, icon: Users },
  { label: 'Analytics', id: 'analytics' as AdminTab, icon: TrendingUp },
  { label: 'Settings', id: 'settings' as AdminTab, icon: Settings },
];

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const role = localStorage.getItem('userRole');

    if (!role || role !== 'admin') {
      router.push('/login');
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
      case 'users': return <UsersSection />;
      case 'analytics': return <AnalyticsSection />;
      case 'settings': return <SettingsSection />;
      default: return <OverviewSection />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border bg-card z-50">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-foreground">AgriSync Admin</span>
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
          <div className="hidden md:flex items-center gap-2 p-6 mb-4 border-b border-sidebar-border">
            <Leaf className="h-7 w-7 text-sidebar-primary" />
            <span className="font-bold text-xl text-sidebar-foreground">AgriSync</span>
          </div>

          <nav className="flex-1 px-4 space-y-1 mt-4 md:mt-0">
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
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-left",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive ? "animate-pulse" : "group-hover:translate-x-1 transition-transform")} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-sidebar-border">
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="w-full flex items-center justify-center gap-2 rounded-xl py-6 hover:scale-[0.98] transition-transform"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between bg-card border-b border-border px-8 py-5 shadow-sm z-10">
          <div>
            <h1 className="text-2xl font-black text-foreground capitalize">{activeTab}</h1>
            <p className="text-sm text-muted-foreground font-medium">Platform Management Control Panel</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">SB</div>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">Surafel Befekadu</p>
              <p className="text-xs text-muted-foreground">Super Admin</p>
            </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="flex-1 overflow-y-auto bg-background/50 scrollbar-hide">
          <div className="max-w-[1400px] mx-auto p-4 md:p-8 pb-12">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

