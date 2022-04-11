import { css } from '@emotion/react';
import normalizeCss from 'normalize.css';

export const normalize = () => css`
  ${normalizeCss.toString()}
`;
