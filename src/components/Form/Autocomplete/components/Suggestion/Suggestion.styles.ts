import { css } from '@emotion/react';
import { theme as themeConfig } from '~config/theme';

import { TEmotionStyles } from '~interfaces/emotionStyles';

export const container: TEmotionStyles = () => (theme: typeof themeConfig) =>
  css`
    width: 100%;

    ul {
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.primary};
      padding: 5px 0;
      border-radius: 5px;
    }
  `;

export const itemStyles = () => css`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
