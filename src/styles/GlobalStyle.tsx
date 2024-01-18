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
        width: 414px;
        margin: 0 auto;
      `}>
      <Global styles={reset} />
      {children}
    </div>
  );
};

export default GlobalStyle;
