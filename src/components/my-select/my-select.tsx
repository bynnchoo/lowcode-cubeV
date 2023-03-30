import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import './index.scss';

export interface MySelectProps {
  color?: 'string';
  placeholder?: 'string';
  style?: 'object'
}

const MySelect: React.FC<MySelectProps> = function MySelect({
                                                              placeholder,
                                                             color,
                                                             style = {},
                                                             ...otherProps
                                                           }) {
  const _style = style || {
    backgroundColor: null
  };
  if (color) {
    _style.backgroundColor = color;
  }
  const _otherProps = otherProps || {};
  _otherProps.style = _style;
  return (
    <Input { ..._otherProps } />
  );
};

export default MySelect;

