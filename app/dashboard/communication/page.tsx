'use client';

import { CommunicationLogs } from '@/components/communication/communication-logs';
import { CommunicationStats } from '@/components/communication/communication-stats';

export default function CommunicationPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Communication Logs</h2>
      <CommunicationStats />
      <CommunicationLogs />
    </div>
  );
}