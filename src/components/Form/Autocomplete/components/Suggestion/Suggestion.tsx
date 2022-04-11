import { useState } from 'react';
import { useKey } from 'react-use';

import isUndefined from 'lodash.isundefined';

import { ISuggestionProps, TFocus, TModifier } from './types';

import Item from './components/Item/Item';

import { TItem } from './components/Item/types';
import { container, itemStyles } from './Suggestion.styles';

function Suggestion(props: ISuggestionProps) {
  const [focus, setFocus] = useState<TFocus>();

  const selectSuggestion = (item: TItem) => {
    props.onSelect(item);
  };

  const selectFocus = () => {
    if (!isUndefined(focus)) selectSuggestion(props.suggestions[focus]);
  };

  const calculateFocus = (focus: TFocus, modifier: TModifier) => {
    const lastFocus = props.suggestions.length - 1;
    let newFocus = !isUndefined(focus) ? focus + modifier : 0;

    if (newFocus < 0) newFocus = lastFocus;
    if (newFocus > lastFocus) newFocus = 0;

    return newFocus;
  };

  const updateFocus = (modifier: TModifier) => () => {
    setFocus((focus) => calculateFocus(focus, modifier));
  };

  const renderItems = (suggestions: TItem[]) =>
    suggestions.map((suggestion, index) => (
      <Item
        onClick={selectSuggestion}
        className={itemStyles()}
        key={suggestion.id}
        label={suggestion.label}
        id={suggestion.id}
        focus={focus === index}
      />
    ));

  useKey('ArrowDown', updateFocus(+1), undefined, [focus]);
  useKey('ArrowUp', updateFocus(-1), undefined, [focus]);
  useKey('Enter', selectFocus, undefined, [focus, props.suggestions]);

  return (
    <div css={container()}>
      <ul tabIndex={0}>{renderItems(props.suggestions)}</ul>
      {focus}
    </div>
  );
}

export default Suggestion;
