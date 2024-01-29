import { create } from 'zustand';

const useIsMainStore = create<{
  isMain: boolean;
  setMainPage: () => void;
  setTimelinePage: () => void;
}>(set => ({
  isMain: true,
  setMainPage: () => set({ isMain: true }),
  setTimelinePage: () => set({ isMain: false }),
}));

export default useIsMainStore;
