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
          label={'2024년의 여정도 시대생과 함께해요!'}
          color={'grey190'}
          typograph={'titleSmall'}
        />
      </div>
      <ul
        css={css`
          width: 90%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        `}>
        <S.List>
          <ListCountCircle count={1} />
          <Txt
            label={'마음에 드는 이벤트 페이지를 캡처하기'}
            color={'grey190'}
            typograph={'bodyLarge'}
          />
        </S.List>
        <S.List>
          <ListCountCircle count={2} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}>
            <Txt
              label={'시대생 인스타그램 팔로우 후 해시태그'}
              color={'grey190'}
              typograph={'bodyLarge'}
            />
            <Txt
              label={'(@uoslife_official)와 함께 스토리에 공유하기!'}
              color={'grey190'}
              typograph={'bodyLarge'}
            />
          </div>
        </S.List>
        <S.List>
          <ListCountCircle count={3} />
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}>
            <Txt
              label={'시대생 도서관 페이지에서 2024년 여정도'}
              color={'grey190'}
              typograph={'bodyLarge'}
            />
            <Txt
              label={'확인할 수 있어요!'}
              color={'grey190'}
              typograph={'bodyLarge'}
            />
          </div>
        </S.List>
        <S.List>
          <ListCountCircle count={4} />

          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}>
            <div
              css={css`
                display: flex;
              `}>
              <Txt
                label={'홈 화면 배너'}
                color={'primaryBrand'}
                typograph={'bodyLarge'}
              />
              <Txt
                label={'를 통해 언제든 다시 2023년'}
                color={'grey190'}
                typograph={'bodyLarge'}
              />
            </div>
            <Txt
              label={'도서관 여정을 확인할 수 있어요~'}
              color={'grey190'}
              typograph={'bodyLarge'}
            />
          </div>
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
    gap: 40px;
  `,
  List: styled.li`
    display: flex;
    gap: 8px;
    align-items: flex-start;
  `,
};
