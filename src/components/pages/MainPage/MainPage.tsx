import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
      <p>정세윤님의 2023년 중앙도서관 여정</p>
      <p>2023년도를 되돌아보며, 자신의 공부량을 확인해 보세요!</p>
      <button onClick={setTimelineView}>확인하기</button>
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
  `,
};
