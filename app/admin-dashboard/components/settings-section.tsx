'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
    User, Shield, Bell, Globe, Save, Trash2, Key, AppWindow, Database, RefreshCcw
} from 'lucide-react';

export function SettingsSection() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
            <div>
                <h2 className="text-2xl font-bold text-foreground">Platform Settings</h2>
                <p className="text-muted-foreground">Manage system configuration and administrative preferences</p>
            </div>

            {/* Admin Profile */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Admin Profile
                </h3>
                <Card className="p-6 bg-card border-border shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Admin Name</label>
                            <Input defaultValue="Surafel Befekadu" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Email Address</label>
                            <Input defaultValue="surafelbefekadu21@gmail.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Role</label>
                            <Input defaultValue="Super Admin" disabled className="bg-muted" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Last Login</label>
                            <Input defaultValue="2026-03-02 07:45" disabled className="bg-muted" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button className="bg-primary text-primary-foreground">Update Profile</Button>
                    </div>
                </Card>
            </section>

            {/* Security Settings */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security & Access
                </h3>
                <Card className="divide-y divide-border bg-card border-border shadow-sm overflow-hidden">
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Two-Factor Authentication</p>
                            <p className="text-xs text-muted-foreground">Add an extra layer of security to your admin account</p>
                        </div>
                        <Switch />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Automatic Session Timeout</p>
                            <p className="text-xs text-muted-foreground">Logout after 30 minutes of inactivity</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">IP Access Control</p>
                            <p className="text-xs text-muted-foreground">Restrict admin access to specific IP addresses</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                    </div>
                </Card>
            </section>

            {/* System Notifications */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    System Notifications
                </h3>
                <Card className="divide-y divide-border bg-card border-border shadow-sm overflow-hidden">
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">New User Alerts</p>
                            <p className="text-xs text-muted-foreground">Receive email when a new farmer or supplier registers</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">System Health Reports</p>
                            <p className="text-xs text-muted-foreground">Daily summary of platform performance and errors</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Revenue Milestones</p>
                            <p className="text-xs text-muted-foreground">Notify when platform hits revenue targets</p>
                        </div>
                        <Switch />
                    </div>
                </Card>
            </section>

            {/* Maintenance & Data */}
            <section className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    System Maintenance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-4 bg-card border-border shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <RefreshCcw className="h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-sm font-medium text-foreground">Refresh Cache</p>
                                <p className="text-xs text-muted-foreground">Clear system-wide cache</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">Run</Button>
                    </Card>
                    <Card className="p-4 bg-card border-border shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Trash2 className="h-5 w-5 text-destructive/70" />
                            <div>
                                <p className="text-sm font-medium text-foreground">Purge Logs</p>
                                <p className="text-xs text-muted-foreground">Delete logs older than 30 days</p>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/5">Purge</Button>
                    </Card>
                </div>
            </section>

            <div className="pt-6 border-t border-border flex justify-end gap-3">
                <Button variant="ghost">Cancel Changes</Button>
                <Button className="bg-primary text-primary-foreground flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save All Settings
                </Button>
            </div>
        </div>
    );
}
