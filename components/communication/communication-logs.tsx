'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const mockLogs = [
  {
    id: '1',
    date: '2024-03-20',
    type: 'call',
    duration: '15:30',
    user: 'John Doe',
    astrologer: 'Dr. Sarah Smith',
    status: 'completed',
  },
  // Add more mock data as needed
];

export function CommunicationLogs() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Astrologer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.date}</TableCell>
              <TableCell>
                <Badge variant="secondary">{log.type}</Badge>
              </TableCell>
              <TableCell>{log.duration}</TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.astrologer}</TableCell>
              <TableCell>
                <Badge
                  variant={log.status === 'completed' ? 'default' : 'secondary'}
                >
                  {log.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}