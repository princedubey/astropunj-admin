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

const mockTransactions = [
  {
    id: '1',
    date: '2024-03-20',
    amount: 150.00,
    type: 'credit',
    status: 'completed',
    description: 'Astrology consultation',
  },
  // Add more mock data as needed
];

export function TransactionsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Badge
                  variant={transaction.type === 'credit' ? 'default' : 'secondary'}
                >
                  {transaction.type}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    transaction.status === 'completed' ? 'default' : 'secondary'
                  }
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}