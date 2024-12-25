'use client';

import { ContentList } from '@/components/content/content-list';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Content
        </Button>
      </div>
      
      <ContentList />
    </div>
  );
}