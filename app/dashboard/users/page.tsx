'use client';

import { UsersTable } from '@/components/users/users-table';
import { UsersTableFilters } from '@/components/users/users-table-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Users</h2>
      </div>
      <UsersTableFilters />
      <UsersTable />
    </div>
  );
}