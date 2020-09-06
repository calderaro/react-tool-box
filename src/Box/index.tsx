import * as React from 'react';
import { style } from 'typestyle';

const boxStyle = style({
  boxShadow: ' 0px 0px 7px rgba(0, 0, 0, 0.1)',
  background: 'white',
  border: '0 !important',
  width: '100%',
  height: '100%',
  padding: '0',
  display: 'block',
  minWidth: 'auto',
  minHeight: 'auto'
});

export const Box: React.FC = ({ children }) => {
  return <div className={boxStyle}>{children}</div>;
};
