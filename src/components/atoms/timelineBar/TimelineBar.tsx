import styled from '@emotion/styled';

import { TimelineBarStatus } from '../../molecules/Timelines/Timelines';
import { SerializedStyles, css, keyframes } from '@emotion/react';
import { useContext } from 'react';
import { TimelineContext } from '../../templates/TimelineView';

type Props = {
  status: TimelineBarStatus;
};

const TimelineBar = ({ status }: Props) => {
  const timelineState = useContext(TimelineContext);

  const animateBar = () => {
    switch (status) {
      case 'DISPLAYED':
        return css``;
      case 'DISPLAYING':
        return css`
          animation: ${loader};
        `;
      case 'UNDISPLAYED':
        return css`
          background-position: 100% 50%;
        `;
    }
  };

  return (
    <S.Bar
      // onAnimationEnd={() => timelineState!.moveNextTimeline()}
      animateBar={animateBar}
      isMouseDown={timelineState!.isMouseDown}
    />
  );
};

export default TimelineBar;

const loader = keyframes`
  0%   { background-position: 100% 0; };
  100% { background-position: 0 0; };
`;

const S = {
  Bar: styled.div<{ animateBar: () => SerializedStyles; isMouseDown: boolean }>`
    height: 2px;
    width: 100%;
    border-radius: 1px;
    background-image: -webkit-linear-gradient(
      left,
      white 0%,
      white 50%,
      rgba(223, 223, 223, 0.7) 50.001%,
      rgba(223, 223, 223, 0.7) 100%
    );
    background-repeat: no-repeat;
    background-size: 200%;

    /** animation */
    ${({ animateBar }) => animateBar()}
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-play-state: ${({ isMouseDown }) => (isMouseDown ? 'paused' : '')};
  `,
};
