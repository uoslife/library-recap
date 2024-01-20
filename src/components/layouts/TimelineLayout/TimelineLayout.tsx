import { Interpolation, Theme, css as cssFromEmotion } from '@emotion/react';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> & { css?: Interpolation<Theme> };

const TimelineLayout = ({ children, css, ...props }: Props) => {
  return (
    <div
      css={[
        cssFromEmotion`
          height: 100%;
          padding-top: 102px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
        `,
        css,
      ]}
      {...props}>
      {children}
    </div>
  );
};

export default TimelineLayout;
