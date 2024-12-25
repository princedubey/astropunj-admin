import apiClient from '@/lib/axiosInstance';
import { endpoints } from '@/lib/endpoints';
import { Category } from '@/lib/types';
import {create} from 'zustand';

interface ICategoryStore{
    isProcessing: boolean;
    success: boolean;
    categories: Category[];
    getCategories: () => Promise<void>;
}

const useCategoryStore = create<ICategoryStore>((set) => ({
    isProcessing: true,
    success: false,
    categories: [],
    getCategories: async () => {
        set({isProcessing: true});
        try {
            const response = await apiClient.get(endpoints.categories)
            // set({categories: data, isProcessing: false});
        } catch (error) {
            console.error('Failed to fetch categories:', error);
            // Handle error appropriately
        }
    },
}));