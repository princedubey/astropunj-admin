'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function SecuritySettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="2fa">Two-Factor Authentication</Label>
          <Switch id="2fa" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="login-alerts">Login Alerts</Label>
          <Switch id="login-alerts" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="ip-restriction">IP Restriction</Label>
          <Switch id="ip-restriction" />
        </div>
      </CardContent>
    </Card>
  );
}