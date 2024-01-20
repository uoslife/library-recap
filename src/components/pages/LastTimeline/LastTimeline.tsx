import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ListCountCircle from '../../atoms/ListCountCircle';

const LastTimeline = () => {
  return (
    <S.Container>
      <img
        css={css`
          width: 250px;
        `}
        src={'/images/main_character.png'}
      />
      <p>{'00'}님의 여정은 어떠셨나요?</p>
      <p>2024년의 여정도 시대생과 함께해요!</p>
      <ul>
        <S.List>
          <ListCountCircle count={1} />
          <p>마음에 드는 이벤트 페이지를 캡처하기</p>
        </S.List>
        <S.List>
          <ListCountCircle count={2} />
          <p>
            시대생 인스타그램 팔로우 후 해시태그(@uoslife_official)와 함께
            스토리에 공유하기!
          </p>
        </S.List>
        <S.List>
          <ListCountCircle count={3} />
          <p>시대생 도서관 페이지에서 2024년 여정도 확인할 수 있어요!</p>
        </S.List>
        <S.List>
          <ListCountCircle count={4} />
          <p>
            홈 화면 배너를 통해 언제든 다시 2023년 도서관 여정을 확인할 수
            있어요~
          </p>
        </S.List>
      </ul>
    </S.Container>
  );
};

export default LastTimeline;

const S = {
  Container: styled.div`
    background: url('/images/lastTimeline_bg.png');
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 108px;
  `,
  List: styled.li`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
};
