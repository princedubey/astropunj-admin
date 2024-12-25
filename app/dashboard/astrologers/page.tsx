'use client';

import { AstrologersTable } from '@/components/astrologers/astrologers-table';
import { AstrologersTableFilters } from '@/components/astrologers/astrologers-table-filters';
import { AddAstrologerDialog } from '@/components/astrologers/add-astrologer-dialog';

export default function AstrologersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Astrologers</h2>
        <AddAstrologerDialog />
      </div>
      
      <AstrologersTableFilters />
      <AstrologersTable />
    </div>
  );
}