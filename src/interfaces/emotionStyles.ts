import { css } from '@emotion/react';

import { IGenericObject } from '~types/objects';

export type TEmotionStyles = (params?: IGenericObject) => (theme?: any) => ReturnType<typeof css>;
