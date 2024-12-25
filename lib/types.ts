export interface Category {
  id: string;
  name: string;
  astrologerCount: number;
  order: number;
}

export interface Astrologer {
  id: string;
  name: string;
  expertise: string[];
  rating: number;
  categoryIds: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  joinedDate: string;
}