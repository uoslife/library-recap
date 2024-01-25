import TimelineLayout from '../../layouts/TimelineLayout';
import { css } from '@emotion/react';

const FourthTimeline = () => (
  <TimelineLayout
    css={css`
      background: linear-gradient(180deg, #fffbe8 0%, #fff5c2 100%);
    `}>
    <p>
      {'00'}님은 {'디자인학과'} 중에서 1257번째로 오래 도서관을 사용했어요~
    </p>
    <img />
    <p>Lv. 새 알</p>
    <p>응~애 나 알</p>
  </TimelineLayout>
);

export default FourthTimeline;
