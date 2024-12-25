import { Category, User } from './types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Vedic Astrology',
    astrologerCount: 15,
    order: 1,
  },
  {
    id: '2',
    name: 'Tarot Reading',
    astrologerCount: 12,
    order: 2,
  },
  {
    id: '3',
    name: 'Numerology',
    astrologerCount: 8,
    order: 3,
  },
  {
    id: '4',
    name: 'Palm Reading',
    astrologerCount: 10,
    order: 4,
  },
  {
    id: '5',
    name: 'Crystal Healing',
    astrologerCount: 6,
    order: 5,
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    joinedDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'active',
    joinedDate: '2024-02-01',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    status: 'inactive',
    joinedDate: '2024-01-20',
  },
];