'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketIcon, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const stats = [
  {
    title: 'Open Tickets',
    value: '23',
    description: '5 high priority',
    icon: TicketIcon,
  },
  {
    title: 'Avg. Response Time',
    value: '2.5 hrs',
    description: '-15% from last month',
    icon: Clock,
  },
  {
    title: 'Resolved Today',
    value: '12',
    description: '+20% from yesterday',
    icon: CheckCircle,
  },
  {
    title: 'Pending Review',
    value: '8',
    description: '3 urgent cases',
    icon: AlertCircle,
  },
];

export function SupportStats() {
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