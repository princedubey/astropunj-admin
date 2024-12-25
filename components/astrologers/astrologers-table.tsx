'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, MoreVertical, Trash, Star } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const mockAstrologers = [
  {
    id: '1',
    name: 'Dr. Sarah Smith',
    expertise: ['Vedic', 'Tarot'],
    rating: 4.8,
    status: 'active',
  },
  // Add more mock data as needed
];

export function AstrologersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Expertise</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockAstrologers.map((astrologer) => (
            <TableRow key={astrologer.id}>
              <TableCell>{astrologer.name}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {astrologer.expertise.map((exp) => (
                    <Badge key={exp} variant="secondary">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {astrologer.rating}
                </div>
              </TableCell>
              <TableCell>{astrologer.status}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}