import { css } from '@emotion/react';

type Props = {
  count: number;
};

const ListCountCircle = ({ count }: Props) => {
  return (
    <div
      css={css`
        width: 20px;
        height: 20px;
        background-color: #aaceff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
      <p
        css={css`
          color: white;
        `}>
        {count}
      </p>
    </div>
  );
};

export default ListCountCircle;
