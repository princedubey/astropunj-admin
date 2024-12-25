'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTheme } from 'next-themes';

const mockData = [
  { name: 'Jan', users: 400, revenue: 2400, consultations: 240 },
  { name: 'Feb', users: 300, revenue: 1398, consultations: 139 },
  { name: 'Mar', users: 200, revenue: 9800, consultations: 980 },
  { name: 'Apr', users: 278, revenue: 3908, consultations: 390 },
  { name: 'May', users: 189, revenue: 4800, consultations: 480 },
  { name: 'Jun', users: 239, revenue: 3800, consultations: 380 },
];

export function AnalyticsDashboard() {
  const { theme } = useTheme();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={mockData}>
              {/* X and Y axis styling */}
              <XAxis
                dataKey="name"
                stroke={theme === 'dark' ? '#CCCCCC' : '#888888'}
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke={theme === 'dark' ? '#CCCCCC' : '#888888'}
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              {/* Tooltip styling */}
              <Tooltip
                contentStyle={{
                  backgroundColor: theme === 'dark' ? '#333333' : '#FFFFFF',
                  color: theme === 'dark' ? '#FFFFFF' : '#000000',
                  border: '1px solid',
                  borderColor: theme === 'dark' ? '#555555' : '#DDDDDD',
                }}
                itemStyle={{
                  color: theme === 'dark' ? '#CCCCCC' : '#000000',
                }}
                cursor={{
                  stroke: theme === 'dark' ? '#555555' : '#DDDDDD',
                }}
              />
              {/* Lines for data */}
              <Line
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--destructive))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="consultations"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
