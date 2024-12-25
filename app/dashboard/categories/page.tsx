'use client';

import { Button } from '@/components/ui/button';
import { CategoryList } from '@/components/categories/category-list';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { CreateCategoryDialog } from '@/components/categories/create-category-dialog';

export default function CategoriesPage() {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
        <Button onClick={() => setShowCreateDialog(true)}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      <CategoryList />
      <CreateCategoryDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog} 
      />
    </div>
  );
}