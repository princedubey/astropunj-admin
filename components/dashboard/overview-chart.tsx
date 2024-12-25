'use client';

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

interface DataPoint {
  name: string;
  value: number;
}

interface OverviewChartProps {
  title: string;
  data: DataPoint[];
  className?: string;
}

export function OverviewChart({ title, data, className }: OverviewChartProps) {
  const { theme } = useTheme(); // Get the current theme

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
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
                backgroundColor: theme === 'dark' ? '#333333' : '#FFFFFF', // Adjust background for dark mode
                color: theme === 'dark' ? '#FFFFFF' : '#000000', // Adjust text color
                border: '1px solid',
                borderColor: theme === 'dark' ? '#555555' : '#DDDDDD', // Adjust border color
              }}
              itemStyle={{
                color: theme === 'dark' ? '#CCCCCC' : '#000000', // Adjust item text color
              }}
              cursor={{
                stroke: theme === 'dark' ? '#555555' : '#DDDDDD', // Adjust cursor line color
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
