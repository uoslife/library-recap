import { css } from '@emotion/react';
import { Txt } from '@uoslife/design-system/web';

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
        margin-top: 2px;
      `}>
      <Txt label={count.toString()} color={'white'} typograph={'bodyMedium'} />
    </div>
  );
};

export default ListCountCircle;
