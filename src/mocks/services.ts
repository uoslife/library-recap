import { GetLibraryHistoriesResponse } from '../api/types';

export const getLibraryHistoriesMockReseponse: GetLibraryHistoriesResponse = {
  usageTime: {
    useDays: 73,
    useMinute: 171,
    hourData: [0, 0, 43, 21, 9, 10, 0, 3, 3, 32, 26, 24],
  },
  preferRegion: {
    libraryName: '중앙도서관',
    roomName: '노트북실',
  },
  userStyle: 'DAY',
  usageRanking: [
    {
      standard: '시대생',
      ranking: 1,
      level: 0,
    },
    {
      standard: '인공지능학과',
      ranking: 1,
      level: 0,
    },
  ],
};
