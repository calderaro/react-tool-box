import * as React from 'react';
import { style } from 'typestyle';

const content = style({
  width: '100%',
  height: '100%',
  overflow: 'auto',
  scrollBehavior: 'smooth'
});

export const Content: React.FC = ({ children }) => <div className={content}>{children}</div>;
