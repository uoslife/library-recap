export type GetLibraryHistoriesResponse = {
  usageTime: {
    useTime: number;
    useHour: number;
    hourData: Array<number>;
  };
  preferRegion: {
    libraryName: string;
    roomName: string;
  };
  userStyle: 'DAY' | 'NIGHT' | 'MORNING';
  usageRanking: [
    {
      standard: string;
      ranking: number;
      level: 0 | 1 | 2 | 3;
    },
    {
      standard: string;
      ranking: number;
      level: 0 | 1 | 2 | 3;
    },
  ];
};
