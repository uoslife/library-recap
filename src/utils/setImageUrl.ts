import { UsageRankingLevel, UserStyleType } from '../api/types';

export const setImageUrlByUserStyle = (userStyle: UserStyleType) => {
  switch (userStyle) {
    case 'MORNING':
      return '/images/user_style_morning.png';
    case 'DAY':
      return '/images/user_style_day.png';
    case 'NIGHT':
      return '/images/user_style_night.png';
  }
};

export const setImageUrlByUsageRankingLevel = (
  usageRankingLevel: UsageRankingLevel,
) => {
  switch (usageRankingLevel) {
    case 0:
      return '/images/ranking_level_0.png';
    case 1:
      return '/images/ranking_level_1.png';
    case 2:
      return '/images/ranking_level_2.png';
    case 3:
      return '/images/ranking_level_3.png';
  }
};
