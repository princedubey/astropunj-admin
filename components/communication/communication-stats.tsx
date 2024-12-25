'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare, Clock, Users } from 'lucide-react';

const stats = [
  {
    title: 'Total Calls',
    value: '2,345',
    description: '+15% from last month',
    icon: Phone,
  },
  {
    title: 'Total Chats',
    value: '4,567',
    description: '+12% from last month',
    icon: MessageSquare,
  },
  {
    title: 'Avg. Duration',
    value: '18 mins',
    description: '-2% from last month',
    icon: Clock,
  },
  {
    title: 'Active Users',
    value: '1,234',
    description: '+8% from last month',
    icon: Users,
  },
];

export function CommunicationStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}