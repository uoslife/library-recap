import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ListCountCircle from '../../atoms/ListCountCircle';
import useUserStore from '../../../store/user';
import { Txt } from '@uoslife/design-system/web';

const LastTimeline = () => {
  const { user } = useUserStore();
  return (
    <S.Container>
      <img
        css={css`
          width: 250px;
        `}
        src={'/images/main_character.png'}
      />
      <div
        css={css`
          width: 90%;
          display: flex;
          flex-direction: column;
          gap: 8px;
        `}>
        <div>
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
              label={'님의'}
              color={'grey160'}
              typograph={'headlineMedium'}
            />
          </div>
          <Txt
            label={'여정은 어떠셨나요?'}
            color={'grey160'}
            typograph={'headlineMedium'}
          />
        </div>
        <Txt
          label={'시대생 도서관 페이지에서 2024년 여정도 확인할 수 있어요!'}
          color={'grey190'}
          typograph={'titleSmall'}
        />
      </div>
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
    gap: 40px;
  `,
  List: styled.li`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `,
};
