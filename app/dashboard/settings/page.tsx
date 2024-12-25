'use client';

import { SettingsTabs } from '@/components/settings/settings-tabs';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <SettingsTabs />
    </div>
  );
}