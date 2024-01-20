import styled from '@emotion/styled';
import TimelineBar from '../../atoms/timelineBar';
import { useEffect, useMemo, useState } from 'react';
import { TimelineOrder } from '../../templates/TimelineView';

export type TimelineBarStatus = 'DISPLAYED' | 'DISPLAYING' | 'UNDISPLAYED';
type TimelineBarStatusType = Array<{
  status: TimelineBarStatus;
  index: number;
}>;

type Props = {
  currentOrder: TimelineOrder;
};

const Timelines = ({ currentOrder }: Props) => {
  const initTimelineBarStatus: TimelineBarStatusType = useMemo(
    () =>
      Array(5)
        .fill({ status: 'UNDISPLAYED' })
        .map((obj, index) => {
          return { ...obj, index };
        }),
    [],
  );
  const [timelineBarStatus, setTimelineBarStatus] =
    useState<TimelineBarStatusType>(initTimelineBarStatus);

  useEffect(() => {
    setTimelineBarStatus(prev => {
      return prev.map(item => {
        if (item.index < currentOrder) return { ...item, status: 'DISPLAYED' };
        if (item.index === currentOrder)
          return { ...item, status: 'DISPLAYING' };
        return { ...item, status: 'UNDISPLAYED' };
      });
    });
  }, [currentOrder]);

  return (
    <S.Container>
      <S.ShadowBackground />
      <S.TimelinesWrapper>
        {timelineBarStatus.map(item => (
          <TimelineBar key={item.index} status={item.status} />
        ))}
      </S.TimelinesWrapper>
    </S.Container>
  );
};

export default Timelines;

const S = {
  Container: styled.div`
    position: absolute;
    width: 100%;
  `,
  ShadowBackground: styled.div`
    position: absolute;
    height: 85px;
    width: 100%;
    background: linear-gradient(
      180deg,
      #d1d1d1 0%,
      rgba(208, 208, 208, 0) 100%
    );
    mix-blend-mode: multiply;
  `,
  TimelinesWrapper: styled.div`
    position: relative;
    display: flex;
    padding: 20px 16px;
    gap: 4px;
  `,
};
