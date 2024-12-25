'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function UsersTableFilters() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          className="pl-8"
        />
      </div>
      {/* Additional filters can be added here */}
    </div>
  );
}