import { SerializedStyles } from '@emotion/react';

export type TItem = Pick<IItemProps, 'label' | 'id'>;

export interface IItemProps {
  id: string;
  label: string;
  focus: boolean;
  className?: SerializedStyles;
  onClick: (item: TItem) => void;
}
