import { create } from 'zustand';
import { RecapInfoType } from '../api/types';

const useRecapInfoStore = create<{
  recapInfo: RecapInfoType | null;
  setRecapInfo: (recapInfo: RecapInfoType) => void;
}>(set => ({
  recapInfo: null,
  setRecapInfo: (recapInfo: RecapInfoType) => set({ recapInfo }),
}));

export default useRecapInfoStore;
