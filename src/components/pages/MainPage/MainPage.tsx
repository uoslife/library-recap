import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Txt, colors } from '@uoslife/design-system/web';
import useUserStore from '../../../store/user';
import Icon from '../../atoms/Icon';
import useHandleClearIcon from '../../../hooks/useHandleClearIcon';
import { useEffect } from 'react';
import uoslifeBridge from '../../../bridge';

type Props = { setTimelineView: () => void };

const MainPage = ({ setTimelineView }: Props) => {
  const { user } = useUserStore();

  const handleClickClearIcon = useHandleClearIcon();

  useEffect(() => {
    if (user?.isVerified === false) {
      alert('포털연동 후 이용해주세요');
      (async () => {
        await uoslifeBridge.goBack();
      })();
    }
  }, []);

  return (
    <S.Container>
      <Icon
        name={'clear'}
        css={css`
          position: absolute;
          top: 12px;
          right: 16px;
          cursor: pointer;
        `}
        onClick={handleClickClearIcon}
      />
      <img
        css={css`
          width: 316px;
        `}
        src={'/images/main_character.png'}
      />
      <S.DescriptionWrapper>
        <div>
          <div
            css={css`
              display: flex;
            `}>
            <Txt
              label={user?.nickname ?? ''}
              color={'primaryBrand'}
              typograph={'headlineLarge'}
            />
            <Txt
              label={'님의 2023년'}
              color={'grey190'}
              typograph={'headlineLarge'}
            />
          </div>
          <Txt
            label={'중앙도서관 여정'}
            color={'grey190'}
            typograph={'headlineLarge'}
          />
        </div>
        <div>
          <Txt
            label={'2023년도를 되돌아보며,'}
            color={'grey190'}
            typograph={'bodyLarge'}
          />
          <Txt
            label={'자신의 공부량을 확인해 보세요!'}
            color={'grey190'}
            typograph={'bodyLarge'}
          />
        </div>
        <S.Button onClick={setTimelineView}>
          <Txt
            label={'확인하기'}
            color={'primaryBrand'}
            typograph={'bodyLarge'}
          />
        </S.Button>
      </S.DescriptionWrapper>
    </S.Container>
  );
};

export default MainPage;

const S = {
  Container: styled.div`
    background-image: url('/images/main_bg.png');
    background-size: 100%;
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
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  Button: styled.button`
    margin-top: 36px;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: ${colors.white};
  `,
};
