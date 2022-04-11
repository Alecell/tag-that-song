import { IChipProps } from './types';

import { container } from './Chip.styles';

function Chip(props: IChipProps) {
  return <div css={container(props.backgroundColor)}>{props.label}</div>;
}

export default Chip;
