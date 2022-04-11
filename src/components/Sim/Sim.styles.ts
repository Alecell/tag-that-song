import { css } from '@emotion/react';

export const container = (color: string) => css`
  background-color: pink;
  padding: 32px;
  border-radius: 4px;
  font-size: 24px;
  .sim {
    color: red;
  }
  &:hover {
    color: ${color};
  }
`;
