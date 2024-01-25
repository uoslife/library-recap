import { UserStyleType } from '../api/types';

export const userStyleText: {
  [T in UserStyleType]: {
    title: string;
    subTitle: string;
  };
} = {
  MORNING: {
    title: '중도의 얼리버드',
    subTitle: '주로 공부하는 시간대는 아침이에요.',
  },
  DAY: {
    title: '중도의 모범생',
    subTitle: '주로 공부하는 시간대는 낮이에요.',
  },
  NIGHT: {
    title: '중도의 부엉이',
    subTitle: '주로 공부하는 시간대는 밤이에요.',
  },
};
export const usageRankingLevelText: {
  [T: string]: {
    title: string;
    subTitle: string;
  };
} = {
  '0': {
    title: '새 알',
    subTitle: '응-애 나 알',
  },
  '1': {
    title: '삐약삐약',
    subTitle: '내 공부량.. 귀여워',
  },
  '2': {
    title: '이루매',
    subTitle: '짜식- 공부좀 했는 걸',
  },
  '3': {
    title: '매',
    subTitle: '꿈을 이루매..',
  },
};
