import { FormEvent, useState, memo, ChangeEvent } from 'react';

import { IInputProps } from './types';

import Chip from '~components/Chip/Chip';

import { container, fromContainer } from './Input.styles';

function Input(props: IInputProps) {
  const addItem = (e: FormEvent<HTMLFormElement>) => {
    console.log('aqui');
    e.preventDefault();
    props.onSubmit();
  };

  const renderSelected = () =>
    props.items.map((item) => <Chip key={item.id} label={item.label} backgroundColor="brown" />);

  const updateSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    props.onChangeInput(text);
  };

  return (
    <div css={container()}>
      {renderSelected()}
      <form onSubmit={addItem} css={fromContainer()}>
        <input value={props.searchText} onChange={updateSearchText} />
      </form>
    </div>
  );
}

export default memo(Input);
