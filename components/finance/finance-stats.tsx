'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    description: '+20.1% from last month',
    icon: DollarSign,
    trend: 'up',
  },
  {
    title: 'Transactions',
    value: '1,234',
    description: '+15% from last month',
    icon: CreditCard,
    trend: 'up',
  },
  // Add more stats as needed
];

export function FinanceStats() {
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
            <p className="text-xs text-muted-foreground flex items-center">
              {stat.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
              )}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}