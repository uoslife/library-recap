import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Txt } from '@uoslife/design-system/web';

type Props = { setTimelineView: () => void };

const MainPage = ({ setTimelineView }: Props) => {
  return (
    <S.Container>
      <img
        css={css`
          width: 316px;
        `}
        src={'/images/main_character.png'}
      />
      <S.DescriptionWrapper>
        <p>
          <p
            css={css`
              display: flex;
            `}>
            <Txt
              label={'00'}
              color={'primaryBrand'}
              typograph={'headlineLarge'}
            />
            <Txt
              label={'님의 2023년'}
              color={'black'}
              typograph={'headlineLarge'}
            />
          </p>
          <Txt
            label={'중앙도서관 여정'}
            color={'black'}
            typograph={'headlineLarge'}
          />
        </p>
        <p>
          <Txt
            label={'2023년도를 되돌아보며,'}
            color={'black'}
            typograph={'bodyLarge'}
          />
          <Txt
            label={'자신의 공부량을 확인해 보세요!'}
            color={'black'}
            typograph={'bodyLarge'}
          />
        </p>
        <button onClick={setTimelineView}>확인하기</button>
      </S.DescriptionWrapper>
    </S.Container>
  );
};

export default MainPage;

const S = {
  Container: styled.div`
    background-image: url('/images/main_bg.png');
    background-size: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 90px;
    gap: 23px;
  `,
  DescriptionWrapper: styled.div`
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
};
