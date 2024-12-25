'use client';

import { AstrologersTable } from '@/components/astrologers/astrologers-table';
import { AstrologersTableFilters } from '@/components/astrologers/astrologers-table-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function AstrologersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Astrologers</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Astrologer
        </Button>
      </div>
      
      <AstrologersTableFilters />
      <AstrologersTable />
    </div>
  );
}