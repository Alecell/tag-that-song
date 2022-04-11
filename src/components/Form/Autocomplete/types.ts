import { TItem } from './components/Suggestion/components/Item/types';

export interface ISelectProps {
  suggestions: TItem[];
  label: string;
  onChange: (items: TItem) => void;
}
