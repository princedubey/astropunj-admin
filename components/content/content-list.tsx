'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, MoreVertical, Trash, Eye } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const mockContent = [
  {
    id: '1',
    title: 'Daily Horoscope',
    status: 'published',
    author: 'John Doe',
    publishDate: '2024-03-20',
  },
  // Add more mock data as needed
];

export function ContentList() {
  return (
    <div className="grid gap-4">
      {mockContent.map((content) => (
        <Card key={content.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold">
              {content.title}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge
                variant={content.status === 'published' ? 'default' : 'secondary'}
              >
                {content.status}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              By {content.author} • Published on {content.publishDate}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}