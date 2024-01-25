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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const FirstTimeline = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: '',
        display: false,
        data: [65, 59, 80, 81, 56, 55, 40, 23, 42, 32, 67, 46],
        backgroundColor: '#4686FF',
        borderRadius: 100,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <TimelineLayout
      css={css`
        padding-left: 16px;
        padding-right: 16px;
      `}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 16px;
        `}>
        <S.DiscriptionWrapper>
          <Txt label={'이용시간'} color={'grey90'} typograph={'labelLarge'} />
          <p
            css={css`
              display: flex;
            `}>
            <Txt
              label={'00'}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
            />
            <Txt label={'님은'} color={'black'} typograph={'headlineMedium'} />

            <Txt
              label={`365일`}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
            <Txt
              label={'출석하여'}
              color={'black'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
          </p>
          <p
            css={css`
              display: flex;
            `}>
            <Txt label={'총'} color={'black'} typograph={'headlineMedium'} />
            <Txt
              label={'200시간'}
              color={'primaryBrand'}
              typograph={'headlineMedium'}
              style={css`
                text-indent: 6px;
              `}
            />
            <Txt
              label={'을 공부했어요.'}
              color={'black'}
              typograph={'headlineMedium'}
            />
          </p>
        </S.DiscriptionWrapper>
        <Bar data={data} options={options} />
      </div>
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        `}>
        <S.DiscriptionWrapper>
          <Txt label={'좌석'} color={'grey90'} typograph={'labelLarge'} />
          <Txt
            label={`${'00'}님의 선호 구역이에요.`}
            color={'black'}
            typograph={'headlineMedium'}
          />
        </S.DiscriptionWrapper>
        <S.PreferRegionImgWrapper>
          <img src="/images/prefer_region.svg" />
          <Txt
            label={'공존'}
            color={'black'}
            typograph={'bodyLarge'}
            style={css`
              position: absolute;
              right: 80.5px;
              top: 42px;
            `}
          />
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
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    /* display: inline-block; */
  `,
  DiscriptionWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
};
