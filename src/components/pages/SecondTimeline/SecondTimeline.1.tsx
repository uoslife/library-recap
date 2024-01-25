import { Txt } from '@uoslife/design-system/web';
import useRecapInfoStore from '../../../store/recapInfo';
import useUserStore from '../../../store/user';
import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';
import { setBackgroundByUserStyle } from '../../../utils/setStyle';

export const SecondTimeline = () => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();
  const isNight = recapInfo?.userStyle === 'NIGHT';

  return (
    <TimelineLayout
      css={setBackgroundByUserStyle(recapInfo?.userStyle ?? 'DAY')}>
      <div
        css={css`
          display: flex;
        `}>
        <Txt
          label={user?.nickname ?? ''}
          color={'primaryBrand'}
          typograph={'headlineLarge'}
        />
        <Txt
          label={'님의 중도 스타일'}
          color={isNight ? 'white' : 'grey160'}
          typograph={'headlineLarge'}
        />
      </div>
      <img
        css={css`
          height: 250px;
        `}
        src={setImageUrlByUserStyle()}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        `}>
        <Txt
          label={`“중도의 얼리버드 ${user?.nickname ?? ''}”`}
          color={isNight ? 'white' : 'grey190'}
          typograph={'headlineLarge'}
        />
        <Txt
          label={'주로 공부하는 시간대는 아침이에요.'}
          color={isNight ? 'white' : 'grey130'}
          typograph={'titleSmall'}
        />
      </div>
    </TimelineLayout>
  );
};
