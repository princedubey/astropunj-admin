'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function AstrologersTableFilters() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search astrologers..."
          className="pl-8"
        />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by expertise" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Expertise</SelectItem>
          <SelectItem value="vedic">Vedic Astrology</SelectItem>
          <SelectItem value="tarot">Tarot Reading</SelectItem>
          <SelectItem value="numerology">Numerology</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="active">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}