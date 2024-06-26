type ErrorResponseType = {
  code: string;
  message: string;
  status: number;
};

export type UserStyleType = 'MORNING' | 'DAY' | 'NIGHT';
export type UsageRankingLevel = 0 | 1 | 2 | 3;

export type UsageRankingType = {
  standard: string;
  ranking: number;
  level: UsageRankingLevel;
};

export type RecapInfoType = {
  usageTime: {
    useDays: number;
    useMinute: number;
    hourData: Array<number>;
  };
  preferRegion: {
    libraryName: string;
    roomName: string;
  };
  userStyle: UserStyleType;
  usageRanking: Array<UsageRankingType>;
};

export type GetLibraryHistoriesResponse = RecapInfoType &
  Partial<ErrorResponseType>;

export type FetchMethodType = 'GET' | 'POST';
