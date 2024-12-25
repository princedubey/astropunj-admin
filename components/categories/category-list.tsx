'use client';

import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Card } from '@/components/ui/card';
import { CategoryItem } from './category-item';
import { useState } from 'react';
import { mockCategories } from '@/lib/mock-data';

export function CategoryList() {
  const [categories, setCategories] = useState(mockCategories);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(categories);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategories(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="categories">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-4"
          >
            {categories.map((category, index) => (
              <Draggable
                key={category.id}
                draggableId={category.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CategoryItem category={category} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}