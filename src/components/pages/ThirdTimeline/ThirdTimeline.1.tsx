import { Txt } from '@uoslife/design-system/web';
import useRecapInfoStore from '../../../store/recapInfo';
import useUserStore from '../../../store/user';
import { setBackgroundByUsageRankingLevel } from '../../../utils/setStyle';
import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';

export const ThirdTimeline = () => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();

  return (
    <TimelineLayout
      css={setBackgroundByUsageRankingLevel(
        recapInfo?.usageRanking[0].level ?? 0,
      )}>
      <div>
        <div
          css={css`
            display: flex;
          `}>
          <Txt
            label={user?.nickname ?? ''}
            color={'primaryBrand'}
            typograph={'headlineLarge'}
          />
          <Txt label={'님은'} color={'grey190'} typograph={'headlineLarge'} />
        </div>
        <div
          css={css`
            display: flex;
          `}>
          <Txt
            label={recapInfo?.usageRanking[0].standard ?? '시대생'}
            color={'primaryBrand'}
            typograph={'headlineLarge'}
          />
          <Txt
            label={'중에서'}
            color={'grey190'}
            typograph={'headlineLarge'}
            style={css`
              text-indent: 6px;
            `}
          />
          <Txt
            label={recapInfo?.usageRanking[0].ranking.toString() ?? '0'}
            color={'primaryBrand'}
            typograph={'headlineLarge'}
            style={css`
              text-indent: 6px;
            `}
          />
          <Txt label={'번째로'} color={'grey190'} typograph={'headlineLarge'} />
        </div>
        <div
          css={css`
            display: flex;
          `}>
          <Txt
            label={'오래 도서관을 사용했어요~'}
            color={'grey190'}
            typograph={'headlineLarge'}
          />
        </div>
      </div>
      <img
        css={css`
          height: 250px;
        `}
        src={'/images/user_style_day.png'}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        `}>
        <div
          css={css`
            display: flex;
          `}>
          <Txt
            label={'Lv. '}
            color={'primaryBrand'}
            typograph={'headlineLarge'}
          />
          <Txt
            label={usageRankingLevelText}
            color={'grey190'}
            typograph={'headlineLarge'}
            style={css`
              text-indent: 6px;
            `}
          />
        </div>
        <Txt label={'응~애 나 알'} color={'grey130'} typograph={'titleSmall'} />
      </div>
    </TimelineLayout>
  );
};
