'use client';

import { TicketList } from '@/components/support/ticket-list';
import { SupportStats } from '@/components/support/support-stats';

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Support Dashboard</h2>
      <SupportStats />
      <TicketList />
    </div>
  );
}