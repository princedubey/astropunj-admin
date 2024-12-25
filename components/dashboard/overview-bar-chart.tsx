'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from 'next-themes';

interface DataPoint {
  name: string;
  value: number;
}

interface OverviewBarChartProps {
  title: string;
  data: DataPoint[];
  className?: string;
}

export function OverviewBarChart({ title, data, className }: OverviewBarChartProps) {
  const { theme } = useTheme(); // Get the current theme

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke={theme === 'dark' ? '#CCCCCC' : '#888888'} // Adjust color for dark mode
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke={theme === 'dark' ? '#CCCCCC' : '#888888'} // Adjust color for dark mode
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
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
            <Bar
              dataKey="value"
              fill="hsl(var(--primary))"
              barSize={20}
              radius={[10, 10, 0, 0]} // Rounded top corners
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
