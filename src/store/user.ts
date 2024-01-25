import { create } from 'zustand';
import { UserInfoType } from '@uoslife/webview';
import { defaultUser } from '../constants/user';

const useUserStore = create<{
  user: UserInfoType | null;
  setUser: (user: UserInfoType) => void;
  setDefaultUser: () => void;
}>(set => ({
  user: null,
  setUser: (user: UserInfoType) => set({ user }),
  setDefaultUser: () => set({ user: defaultUser }),
}));

export default useUserStore;
