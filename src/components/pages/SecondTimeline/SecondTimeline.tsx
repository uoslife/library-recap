import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';

const SecondTimeline = () => {
  return (
    <TimelineLayout
      css={css`
        background: linear-gradient(
          180deg,
          #fff8b8 0%,
          #e2f1ff 53%,
          #acd7fe 100%
        );
      `}>
      <p>{'00'}님의 중도 스타일</p>
      <p>“중도의 얼리버드 {'00'}”</p>
      <p>주로 공부하는 시간대는 {'아침'}이에요</p>
    </TimelineLayout>
  );
};

export default SecondTimeline;
