/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Txt, colors } from '@uoslife/design-system/web';
import { Component, ErrorInfo, ReactNode } from 'react';
import uoslifeBridge from '../bridge';
import { css } from '@emotion/react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <S.Container>
          <div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
              `}>
              <Txt
                label={'알 수 없는 오류가 발생했어요.'}
                color={'grey190'}
                typograph={'titleLarge'}
              />
              <Txt
                label={'서비스 이용에 불편을 드려 죄송합니다.'}
                color={'grey130'}
                typograph={'titleSmall'}
              />
            </div>
            <img
              src={'/images/ranking_level_1.png'}
              css={css`
                width: 220px;
                padding-top: 38px;
              `}
            />
          </div>
          <S.Button onClick={async () => await uoslifeBridge.goBack()}>
            <Txt
              label={'돌아가기'}
              color={'primaryBrand'}
              typograph={'bodyLarge'}
            />
          </S.Button>
        </S.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const S = {
  Container: styled.div`
    background-color: ${colors.primaryLighter};
    height: 100vh;
    padding: 96px 12px 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  Button: styled.button`
    width: 100%;
    margin-top: 36px;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: ${colors.white};
  `,
};
