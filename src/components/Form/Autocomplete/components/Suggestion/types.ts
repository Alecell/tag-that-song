import { TUndefinable } from '~types/utils';

import { TItem } from './components/Item/types';

export type TModifier = 1 | -1;
export type TFocus = TUndefinable<number>;

export interface ISuggestionProps {
  suggestions: TItem[];
  onSelect: (item: TItem) => void;
}
