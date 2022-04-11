import { TItem } from '../Suggestion/components/Item/types';

export interface IInputProps {
  items: TItem[];
  searchText: string;
  onSubmit: () => void;
  onChangeInput: (text: string) => void;
}
