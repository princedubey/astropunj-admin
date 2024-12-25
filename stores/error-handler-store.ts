import axios from "axios";
import { create } from "zustand";

export interface IErrorStore {
  error: string | null;
  setError: (error: any) => void;
  clearError: () => void;
}

// Define the error handler store
const useErrorStore = create<IErrorStore>((set) => ({
  error: null,
  setError: (error) => {
    if (axios.isAxiosError(error)) {
      set({ error: error.message });
    } else {
      set({ error: "An unknown error occurred" });
    }
  },
  clearError: () => set({ error: null }),
}));

export default useErrorStore;
