import { css } from '@emotion/react';
import { UsageRankingLevel, UserStyleType } from '../api/types';

export const setBackgroundByUserStyle = (userStyle: UserStyleType) => {
  switch (userStyle) {
    case 'MORNING':
      return css`
        background: linear-gradient(
          180deg,
          #fff8b8 0%,
          #e2f1ff 53%,
          #acd7fe 100%
        );
      `;
    case 'DAY':
      return css`
        background: linear-gradient(
          180deg,
          #ffe27c -2.47%,
          #fff5dc 38.47%,
          #ffe27c 101.16%
        );
      `;
    case 'NIGHT':
      return css`
        background: linear-gradient(
          180deg,
          #3d322d 0.5%,
          #4d556f 45.5%,
          #1d233a 91.5%
        );
      `;
  }
};

export const setBackgroundByUsageRankingLevel = (
  usageRankingLevel: UsageRankingLevel,
) => {
  switch (usageRankingLevel) {
    case 0:
      return css`
        background: linear-gradient(180deg, #fffbe8 0%, #fff5c2 100%);
      `;
    case 1:
      return css`
        background: linear-gradient(180deg, #fff6d7 0%, #ffe99d 100%);
      `;
    case 2:
      return css`
        background: linear-gradient(180deg, #f9e6ca 0%, #c5ab85 100%);
      `;
    case 3:
      return css`
        background: radial-gradient(
          83.89% 43.83% at 50% 42.89%,
          #fdfabc 25.5%,
          #58a6ff 100%
        );
      `;
  }
};
