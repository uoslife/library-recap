import { Txt } from '@uoslife/design-system/web';
import useRecapInfoStore from '../../../store/recapInfo';
import useUserStore from '../../../store/user';
import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';
import { setBackgroundByUserStyle } from '../../../utils/setStyle';
import { setImageUrlByUserStyle } from '../../../utils/setImageUrl';
import { userStyleText } from '../../../constants/timelineText';

const DEFAULT_USER_STYLE = 'DAY';

const SecondTimeline = () => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();
  const isNight = recapInfo?.userStyle === 'NIGHT';
  const userStyle = recapInfo?.userStyle ?? DEFAULT_USER_STYLE;
  return (
    <TimelineLayout css={setBackgroundByUserStyle(userStyle)}>
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
        src={setImageUrlByUserStyle(recapInfo?.userStyle ?? 'DAY')}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        `}>
        <Txt
          label={`“${userStyleText[userStyle].title} ${user?.nickname ?? ''}”`}
          color={isNight ? 'white' : 'grey190'}
          typograph={'headlineLarge'}
        />
        <Txt
          label={userStyleText[userStyle].subTitle}
          color={isNight ? 'white' : 'grey130'}
          typograph={'titleSmall'}
        />
      </div>
    </TimelineLayout>
  );
};

export default SecondTimeline;
