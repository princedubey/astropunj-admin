import {create} from 'zustand';
import axios from 'axios';
import useErrorStore from './error-handler-store';
import { endpoints } from '@/lib/endpoints'; 
import Cookies from 'js-cookie';
import apiClient from '@/lib/axiosInstance';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoggingIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: null,
    isLoggingIn: true,
  login: async (email, password) => {
    try {
        useErrorStore.getState().clearError();  
      const response = await apiClient.post(endpoints.login, { email, password, role: 'admin' });
      if(response.status === 200){
        const dataResponse = response.data;
        set({ isAuthenticated: true, token: dataResponse.data.token ,isLoggingIn: false});
        // store the token in cookies 
        Cookies.set('access_token', dataResponse.data.token);
        window.location.reload()
        

      }
    } catch (error) {
        useErrorStore.getState().setError(error);
      console.error('Login failed:', error);
      // Handle error appropriately
    }
  },
  logout: () => {
    set({ isAuthenticated: false, token: null ,isLoggingIn: false});
    Cookies.remove('access_token');
    window.location.reload();
    
  },
}));

export default useAuthStore;
