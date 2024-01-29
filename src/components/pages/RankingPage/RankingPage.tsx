import { Txt } from '@uoslife/design-system/web';
import useRecapInfoStore from '../../../store/recapInfo';
import useUserStore from '../../../store/user';
import { setBackgroundByUsageRankingLevel } from '../../../utils/setStyle';
import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';
import { usageRankingLevelText } from '../../../constants/timelineText';
import { setImageUrlByUsageRankingLevel } from '../../../utils/setImageUrl';

type Props = {
  usageRankingOrder: 0 | 1;
};

const RankingPage = ({ usageRankingOrder }: Props) => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();

  return (
    <TimelineLayout
      css={setBackgroundByUsageRankingLevel(
        recapInfo?.usageRanking[0].level ?? 3,
      )}>
      <div
        css={css`
          padding-right: 16px;
        `}>
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
            label={
              usageRankingOrder !== 1
                ? recapInfo?.usageRanking[usageRankingOrder].standard ||
                  '시대생'
                : recapInfo?.usageRanking[usageRankingOrder].standard ||
                  '전공학과'
            }
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
            label={
              recapInfo?.usageRanking[usageRankingOrder].ranking.toString() ??
              '0'
            }
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
          height: ${recapInfo?.usageRanking[usageRankingOrder].level === 3
            ? '180px'
            : '250px'};
        `}
        src={setImageUrlByUsageRankingLevel(
          recapInfo?.usageRanking[usageRankingOrder].level ?? 3,
        )}
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
            label={
              usageRankingLevelText[
                recapInfo?.usageRanking[usageRankingOrder].level.toString() ??
                  '0'
              ].title
            }
            color={'grey190'}
            typograph={'headlineLarge'}
            style={css`
              text-indent: 6px;
            `}
          />
        </div>
        {recapInfo?.usageRanking[usageRankingOrder].level === 3 ? (
          <Txt
            label={'Falco peregrinusTunstall, 1771'}
            color={'grey130'}
            typograph={'titleSmall'}
          />
        ) : null}
        <Txt
          label={
            usageRankingLevelText[
              recapInfo?.usageRanking[usageRankingOrder].level.toString() ?? '0'
            ].subTitle
          }
          color={'grey130'}
          typograph={'titleSmall'}
        />
      </div>
    </TimelineLayout>
  );
};

export default RankingPage;
