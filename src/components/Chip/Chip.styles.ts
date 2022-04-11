import { css } from '@emotion/react';

import { IChipProps } from './types';

export const container = (backgroundColor: IChipProps['backgroundColor'] = 'gray') => css`
  background-color: gray;
  padding: 5px 13px;
  border-radius: 50px;
  background-color: ${backgroundColor};
  margin-right: 8px;
  white-space: nowrap;
`;
