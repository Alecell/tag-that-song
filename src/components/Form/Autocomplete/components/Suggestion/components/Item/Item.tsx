import { css } from '@emotion/react';

import { IItemProps } from './types';

function Item(props: IItemProps) {
  const handleClick = () => {
    props.onClick({
      id: props.id,
      label: props.label,
    });
  };

  return (
    <li
      css={[
        props.className,
        css`
          background-color: ${props.focus ? '#f5f5f5' : 'transparent'};
        `,
      ]}
      onClick={handleClick}
    >
      {props.label}
    </li>
  );
}

export default Item;
