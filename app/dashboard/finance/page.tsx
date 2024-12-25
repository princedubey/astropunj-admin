'use client';

import { TransactionsTable } from '@/components/finance/transactions-table';
import { FinanceStats } from '@/components/finance/finance-stats';

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Financial Management</h2>
      <FinanceStats />
      <TransactionsTable />
    </div>
  );
}