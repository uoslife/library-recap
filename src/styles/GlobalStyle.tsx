/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import reset from './reset';
import { fontFace } from './font';

type Props = {
  children: React.ReactElement;
};

const GlobalStyle = ({ children }: Props) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        height: 100vh;
      `}>
      <Global styles={[reset, fontFace]} />
      {children}
    </div>
  );
};

export default GlobalStyle;
