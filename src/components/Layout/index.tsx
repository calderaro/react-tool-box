import * as React from 'react';
import { style } from 'typestyle';

const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f2f4f8'
});

export const Layout: React.FC = ({ children }) => <div className={container}>{children}</div>;
