import { css } from '@emotion/react';
import styled from '@emotion/styled';
import TimelineLayout from '../../layouts/TimelineLayout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Txt } from '@uoslife/design-system/web';
import useUserStore from '../../../store/user';
import useRecapInfoStore from '../../../store/recapInfo';
import {
  usageTimeBarData,
  usageTimeBarOptions,
} from '../../../constants/usageTimeBar';
import Icon from '../../atoms/Icon';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const FirstTimeline = () => {
  const { user } = useUserStore();
  const { recapInfo } = useRecapInfoStore();

  return (
    <TimelineLayout
      css={css`
        width: 90%;
        margin: 0 auto;
      `}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        `}>
        <S.DescriptionWrapper>
          <S.DescriptionTitleWrapper>
            <Icon name="clock" />
            <Txt label={'이용시간'} color={'grey90'} typograph={'labelLarge'} />
          </S.DescriptionTitleWrapper>
          <div
            css={css`
              display: flex;
            `}>
            <Txt
              label={user?.nickname ?? ''}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
            />
            <Txt
              label={'님은'}
              color={'grey190'}
              typograph={'headlineMedium'}
            />
            <Txt
              label={`${recapInfo?.usageTime.useTime ?? ''}일`}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
            <Txt
              label={'출석하여'}
              color={'grey190'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
          </div>
          <div
            css={css`
              display: flex;
            `}>
            <Txt label={'총'} color={'grey190'} typograph={'headlineMedium'} />
            <Txt
              label={`${recapInfo?.usageTime.useHour ?? ''}시간`}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
            <Txt
              label={'을 공부했어요.'}
              color={'grey190'}
              typograph={'headlineMedium'}
            />
          </div>
        </S.DescriptionWrapper>
        <Bar
          data={usageTimeBarData(recapInfo?.usageTime.hourData ?? [])}
          options={usageTimeBarOptions}
        />
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}>
        <S.DescriptionWrapper>
          <S.DescriptionTitleWrapper>
            <Icon name="chair" />
            <Txt label={'좌석'} color={'grey90'} typograph={'labelLarge'} />
          </S.DescriptionTitleWrapper>
          <div
            css={css`
              display: flex;
            `}>
            <Txt
              label={user?.nickname ?? ''}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
            />
            <Txt
              label={`님의 선호 구역이에요.`}
              color={'grey190'}
              typograph={'headlineMedium'}
            />
          </div>
        </S.DescriptionWrapper>
        <S.PreferRegionImgWrapper>
          <div
            css={css`
              width: 294px;
              position: absolute;
              top: 20px;
              left: 50%;
              transform: translateX(-50%);
            `}>
            <img src="/images/prefer_region.svg" />
            <div
              css={css`
                position: absolute;
                width: 80px;
                top: 40px;
                right: 0;
              `}>
              <Txt
                label={recapInfo?.preferRegion.libraryName ?? ''}
                color={'grey190'}
                typograph={'bodyLarge'}
                style={css`
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%);
                  width: fit-content;
                  white-space: nowrap;
                `}
              />
            </div>
          </div>
        </S.PreferRegionImgWrapper>
      </div>
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
    display: inline-block;
    /* display: inline-flex; */
    align-items: center;
    justify-content: center;
    position: relative;
  `,
  DescriptionWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  DescriptionTitleWrapper: styled.div`
    display: flex;
    gap: 4px;
  `,
};
