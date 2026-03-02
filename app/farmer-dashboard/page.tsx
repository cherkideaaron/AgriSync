'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { StatCard } from '../components/stat-card';
import { SidebarNav } from '../components/sidebar-nav';
import { Leaf, BarChart3, Droplet, TrendingUp, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

const YIELD_DATA = [
  { month: 'Jan', wheat: 2400, corn: 2210 },
  { month: 'Feb', wheat: 2210, corn: 2290 },
  { month: 'Mar', wheat: 2290, corn: 2000 },
  { month: 'Apr', wheat: 2000, corn: 2181 },
  { month: 'May', wheat: 2181, corn: 2500 },
  { month: 'Jun', wheat: 2500, corn: 2100 },
];

const SIDEBAR_ITEMS = [
  { label: 'Overview', href: '/farmer-dashboard', icon: BarChart3 },
  { label: 'Soil Monitoring', href: '#soil', icon: Droplet },
  { label: 'Yield Prediction', href: '#yield', icon: TrendingUp },
];

export default function FarmerDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState('Farmer');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const name = localStorage.getItem('userName');
    const role = localStorage.getItem('userRole');

    if (!role || role !== 'farmer') {
      router.push('/login');
    } else if (name) {
      setUserName(name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    router.push('/');
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-background">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-foreground">AgriSync</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-foreground"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 md:static md:w-64 bg-sidebar border-r border-sidebar-border z-40 transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="hidden md:flex items-center gap-2 p-6 border-b border-sidebar-border">
          <Leaf className="h-6 w-6 text-sidebar-primary" />
          <span className="font-bold text-sidebar-foreground">AgriSync</span>
        </div>
        <div className="p-6">
          <SidebarNav
            items={SIDEBAR_ITEMS}
            onNavigate={() => setSidebarOpen(false)}
          />
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Close sidebar on overlay click */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 md:hidden bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="hidden md:flex items-center justify-between bg-card border-b border-border p-6">
          <h1 className="text-2xl font-bold text-foreground">Welcome, {userName}</h1>
          <p className="text-muted-foreground">Farm Dashboard Overview</p>
        </div>

        {/* Content */}
        <div className="p-4 md:p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-4">
            <StatCard
              label="Total Yield (tons)"
              value="485"
              change="+12% from last year"
              trend="up"
              icon={TrendingUp}
            />
            <StatCard
              label="Avg Soil Moisture"
              value="72%"
              change="Optimal range"
              trend="neutral"
              icon={Droplet}
            />
            <StatCard
              label="Farm Area"
              value="150 acres"
              change="3 active fields"
              trend="neutral"
            />
            <StatCard
              label="Market Value"
              value="$48.5K"
              change="+8% this month"
              trend="up"
            />
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Soil Monitoring Chart */}
            <Card className="p-6 bg-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Soil Monitoring (7-Day)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={SOIL_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                  <Legend wrapperStyle={{ color: 'var(--foreground)' }} />
                  <Line
                    type="monotone"
                    dataKey="moisture"
                    stroke="var(--chart-1)"
                    name="Moisture %"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="temp"
                    stroke="var(--chart-2)"
                    name="Temp °C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Yield Prediction Chart */}
            <Card className="p-6 bg-card">
              <h2 className="text-lg font-semibold text-foreground mb-4">Crop Yield (6-Month)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={YIELD_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                  <Legend wrapperStyle={{ color: 'var(--foreground)' }} />
                  <Bar dataKey="wheat" fill="var(--chart-1)" name="Wheat" />
                  <Bar dataKey="corn" fill="var(--chart-3)" name="Corn" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="p-6 bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Add New Field
              </Button>
              <Button variant="outline">Schedule Irrigation</Button>
              <Link href="/marketplace">
                <Button variant="outline" className="w-full">
                  Browse Marketplace
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
