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

const DEFAULT_USAGE_RANKING_LEVEL = 0;
const MAX_USAGE_RANKING_LEVEL = 3;

const RankingPage = ({ usageRankingOrder }: Props) => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();

  return (
    <TimelineLayout
      css={setBackgroundByUsageRankingLevel(
        recapInfo?.usageRanking[usageRankingOrder].level ??
          DEFAULT_USAGE_RANKING_LEVEL,
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
        </div>
        <div
          css={css`
            display: flex;
          `}>
          <Txt
            label={
              recapInfo?.usageRanking[usageRankingOrder].ranking.toString() ??
              DEFAULT_USAGE_RANKING_LEVEL.toString()
            }
            color={'primaryBrand'}
            typograph={'headlineLarge'}
          />
          <Txt
            label={'번째로 오래 도서관을'}
            color={'grey190'}
            typograph={'headlineLarge'}
          />
        </div>
        <Txt
          label={'사용했어요~'}
          color={'grey190'}
          typograph={'headlineLarge'}
        />
      </div>
      <img
        css={css`
          height: ${recapInfo?.usageRanking[usageRankingOrder].level ===
          MAX_USAGE_RANKING_LEVEL
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
                  DEFAULT_USAGE_RANKING_LEVEL.toString()
              ].title
            }
            color={'grey190'}
            typograph={'headlineLarge'}
            style={css`
              text-indent: 6px;
            `}
          />
        </div>
        {recapInfo?.usageRanking[usageRankingOrder].level ===
        MAX_USAGE_RANKING_LEVEL ? (
          <Txt
            label={'Falco peregrinusTunstall, 1771'}
            color={'grey130'}
            typograph={'titleSmall'}
          />
        ) : null}
        <Txt
          label={
            usageRankingLevelText[
              recapInfo?.usageRanking[usageRankingOrder].level.toString() ??
                DEFAULT_USAGE_RANKING_LEVEL.toString()
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
