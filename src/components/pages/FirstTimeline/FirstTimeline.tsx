import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TimelineLayout from '../../layouts/TimelineLayout';

const FirstTimeline = () => {
  return (
    <TimelineLayout>
      <p>이용시간</p>
      <p>{'00'}님은 365일 출석하여 총 200시간을 공부했어요.</p>
      <p>좌석</p>
      <p>{'00'}님의 선호 구역이에요.</p>
      <S.PreferRegionImgWrapper>
        <img src="/images/prefer_region.svg" />
        <p
          css={css`
            position: absolute;
            right: 26px;
            top: 42px;
          `}>
          공존
        </p>
      </S.PreferRegionImgWrapper>
    </TimelineLayout>
  );
};

export default FirstTimeline;

const S = {
  Container: styled.div`
    height: 100%;
    padding-top: 102px;
    display: flex;
    flex-direction: column;
    gap: 48px;
  `,
  PreferRegionImgWrapper: styled.div`
    position: relative;
    display: inline-block;
  `,
};
