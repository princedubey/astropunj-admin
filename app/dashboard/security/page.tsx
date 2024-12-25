'use client';

import { SecurityLogs } from '@/components/security/security-logs';
import { SecuritySettings } from '@/components/security/security-settings';

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Security</h2>
      <SecuritySettings />
      <SecurityLogs />
    </div>
  );
}