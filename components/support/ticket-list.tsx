'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const mockTickets = [
  {
    id: '1',
    title: 'Payment Issue',
    status: 'open',
    priority: 'high',
    user: 'Jane Smith',
    created: '2024-03-20',
    lastUpdate: '2024-03-21',
  },
  // Add more mock data as needed
];

export function TicketList() {
  return (
    <div className="space-y-4">
      {mockTickets.map((ticket) => (
        <Card key={ticket.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">
              {ticket.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{ticket.priority}</Badge>
              <Badge
                variant={ticket.status === 'open' ? 'default' : 'secondary'}
              >
                {ticket.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Opened by {ticket.user}
                </p>
                <p className="text-xs text-muted-foreground">
                  Created: {ticket.created} • Last Update: {ticket.lastUpdate}
                </p>
              </div>
              <Button variant="secondary" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Respond
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}