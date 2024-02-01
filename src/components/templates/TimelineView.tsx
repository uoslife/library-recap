import { createContext, useCallback, useState } from 'react';
import styled from '@emotion/styled';

import Timelines from '../molecules/Timelines';
import FirstTimeline from '../pages/FirstTimeline';
import SecondTimeline from '../pages/SecondTimeline';
import FourthTimeline from '../pages/FourthTimeline';
import ThirdTimeline from '../pages/ThirdTimeline';
import LastTimeline from '../pages/LastTimeline';

const FIRST_TIMELINE = 0;
const SECOND_TIMELINE = 1;
const THIRD_TIMELINE = 2;
const FOURTH_TIMELINE = 3;
const LAST_TIMELINE = 4;

export type TimelineOrder =
  | typeof FIRST_TIMELINE
  | typeof SECOND_TIMELINE
  | typeof THIRD_TIMELINE
  | typeof FOURTH_TIMELINE
  | typeof LAST_TIMELINE;

export const TimelineContext = createContext<{
  isMouseDown: boolean;
  moveNextTimeline: () => void;
} | null>(null);

const TimelineView = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [pressTime, setPressTime] = useState(0);
  const [timelineOrder, setTimelineOrder] =
    useState<TimelineOrder>(FIRST_TIMELINE);

  const movePrevTimeline = useCallback(() => {
    if (timelineOrder === FIRST_TIMELINE) return;
    setTimelineOrder(prev => (prev - 1) as TimelineOrder);
  }, [timelineOrder]);
  const moveNextTimeline = useCallback(() => {
    if (timelineOrder === LAST_TIMELINE) return;
    setTimelineOrder(prev => (prev + 1) as TimelineOrder);
  }, [timelineOrder]);

  const handleClickMoveArea = (area: 'PREV' | 'NEXT') => {
    if (pressTime > 150) return;
    switch (area) {
      case 'PREV':
        movePrevTimeline();
        break;
      case 'NEXT':
        moveNextTimeline();
        break;
    }
  };

  const switchTimeline = () => {
    switch (timelineOrder) {
      case FIRST_TIMELINE:
        return <FirstTimeline />;
      case SECOND_TIMELINE:
        return <SecondTimeline />;
      case THIRD_TIMELINE:
        return <ThirdTimeline />;
      case FOURTH_TIMELINE:
        return <FourthTimeline />;
      case LAST_TIMELINE:
        return <LastTimeline />;
    }
  };

  return (
    <TimelineContext.Provider value={{ isMouseDown, moveNextTimeline }}>
      <S.Container
        onTouchStart={() => {
          setPressTime(new Date().valueOf());
          setIsMouseDown(true);
        }}
        onTouchEnd={() => {
          setPressTime(new Date().valueOf() - pressTime);
          setIsMouseDown(false);
        }}>
        <Timelines currentOrder={timelineOrder} />
        <S.MovePrevArea onClick={() => handleClickMoveArea('PREV')} />
        <S.MoveNextArea onClick={() => handleClickMoveArea('NEXT')} />
        {switchTimeline()}
      </S.Container>
    </TimelineContext.Provider>
  );
};

export default TimelineView;

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  MovePrevArea: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: calc(100% * 2 / 12);
  `,
  MoveNextArea: styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: calc(100% * 9 / 12);
  `,
};
