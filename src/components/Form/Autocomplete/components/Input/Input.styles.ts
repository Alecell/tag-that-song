import { css } from '@emotion/react';

export const container = () => css`
  margin: 2px;
  border-radius: 6px;
  box-shadow: 0 0 0 1px black;
  cursor: text;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 13px;

  &:hover {
    box-shadow: 0 0 0 1px lightgray;
  }

  &:focus {
    box-shadow: 0 0 0 2px red;
  }
`;

export const fromContainer = () => css`
  width: 100%;
  padding: 13px 0;
  min-width: 144px;

  input {
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;
