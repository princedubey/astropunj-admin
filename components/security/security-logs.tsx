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

const mockLogs = [
  {
    id: '1',
    timestamp: '2024-03-20 15:30:00',
    action: 'login',
    user: 'admin@example.com',
    ip: '192.168.1.1',
    status: 'success',
  },
  // Add more mock data as needed
];

export function SecurityLogs() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Timestamp</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>User</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell>{log.timestamp}</TableCell>
              <TableCell>
                <Badge variant="secondary">{log.action}</Badge>
              </TableCell>
              <TableCell>{log.user}</TableCell>
              <TableCell>{log.ip}</TableCell>
              <TableCell>
                <Badge
                  variant={log.status === 'success' ? 'default' : 'destructive'}
                >
                  {log.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}