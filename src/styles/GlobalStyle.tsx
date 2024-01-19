/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import reset from './reset';

type Props = {
  children: React.ReactElement;
};

const GlobalStyle = ({ children }: Props) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 434px;
        height: 100vh;
      `}>
      <Global styles={reset} />
      {children}
    </div>
  );
};

export default GlobalStyle;
