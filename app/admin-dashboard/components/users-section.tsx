'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Filter, MoreVertical, Mail, Shield, UserX, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const MOCK_USERS = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Farmer', status: 'Active', joined: '2023-10-12' },
    { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'Supplier', status: 'Pending', joined: '2023-11-05' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', role: 'Farmer', status: 'Active', joined: '2023-09-28' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Farmer', status: 'Inactive', joined: '2023-08-15' },
    { id: 5, name: 'David Lee', email: 'david@example.com', role: 'Supplier', status: 'Active', joined: '2023-11-20' },
    { id: 6, name: 'Emma Davis', email: 'emma@example.com', role: 'Farmer', status: 'Active', joined: '2023-12-01' },
];

export function UsersSection() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = MOCK_USERS.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">User Management</h2>
                    <p className="text-muted-foreground">Manage platform users and their permissions</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search users..."
                            className="pl-9"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                    </Button>
                </div>
            </div>

            <Card className="overflow-hidden border-border bg-card shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="px-6 py-4 text-sm font-semibold text-foreground">User</th>
                                <th className="px-6 py-4 text-sm font-semibold text-foreground">Role</th>
                                <th className="px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                                <th className="px-6 py-4 text-sm font-semibold text-foreground">Joined Date</th>
                                <th className="px-6 py-4 text-sm font-semibold text-foreground text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-muted/30 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-foreground">{user.name}</p>
                                                <p className="text-xs text-muted-foreground">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-foreground">{user.role}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-accent/10 text-accent' :
                                                user.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500' :
                                                    'bg-destructive/10 text-destructive'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">
                                        {user.joined}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <Mail className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                <Shield className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                                <UserX className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredUsers.length === 0 && (
                    <div className="p-12 text-center">
                        <p className="text-muted-foreground">No users found matching your search.</p>
                    </div>
                )}
            </Card>
        </div>
    );
}
