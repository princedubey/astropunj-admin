'use client';

import { StatsCard } from '@/components/dashboard/stats-card';
import { OverviewChart } from '@/components/dashboard/overview-chart';
import { Users, Phone, MessageSquare, DollarSign } from 'lucide-react';
import { OverviewBarChart } from '@/components/dashboard/overview-bar-chart';

const mockUserData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 550 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 950 },
  { name: 'Jun', value: 1200 },
];

const mockRevenueData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 3600 },
  { name: 'Mar', value: 3200 },
  { name: 'Apr', value: 4800 },
  { name: 'May', value: 5500 },
  { name: 'Jun', value: 6800 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="12,345"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          description="+20.1% from last month"
        />
        <StatsCard
          title="Total Calls"
          value="2,345"
          icon={<Phone className="h-4 w-4 text-muted-foreground" />}
          description="+15.2% from last month"
        />
        <StatsCard
          title="Total Chats"
          value="4,567"
          icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
          description="+12.5% from last month"
        />
        <StatsCard
          title="Revenue"
          value="$34,567"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          description="+18.7% from last month"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <OverviewChart
          title="User Growth"
          data={mockUserData}
        />
        <OverviewChart
          title="Revenue Growth"
          data={mockRevenueData}
        />
      </div>
      <OverviewBarChart
          title="User Growth (Bar)"
          data={mockUserData} // Example data for bar chart
      />
    </div>
  );
}