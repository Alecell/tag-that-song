import { useState } from 'react';

import differenceWith from 'lodash.differencewith';
import first from 'lodash.first';
import isEmpty from 'lodash.isempty';
import isEqual from 'lodash.isequal';

import { ISelectProps } from './types';

import Input from './components/Input/Input';
import Suggestion from './components/Suggestion/Suggestion';

import { container } from './Autocomplete.styles';
import { TItem } from './components/Suggestion/components/Item/types';

function Select(props: ISelectProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] = useState<TItem[]>([]);

  const filterSuggestions = (suggestions: TItem[]) =>
    differenceWith(suggestions, selectedItems, isEqual).filter((suggestion) =>
      suggestion.label.toLowerCase().includes(searchText.toLowerCase())
    );

  const addSuggestion = (suggestion: TItem) => {
    setSelectedItems([...selectedItems, suggestion]);
    setSearchText('');
  };

  const addFirstSuggestion = () => {
    const filteredSuggestions = filterSuggestions(props.suggestions);

    if (!isEmpty(filteredSuggestions)) {
      addSuggestion(first(filteredSuggestions)!);
    }
  };

  return (
    <div css={container()}>
      <Input
        items={selectedItems}
        onSubmit={addFirstSuggestion}
        onChangeInput={setSearchText}
        searchText={searchText}
      />

      <Suggestion suggestions={filterSuggestions(props.suggestions)} onSelect={addSuggestion} />
    </div>
  );
}

export default Select;
