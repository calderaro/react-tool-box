import * as React from 'react';
import { style } from 'typestyle';

export type ContainerProps = {
  style?: React.CSSProperties;
};

const styles = style({
  width: '100%',
  maxWidth: '100%',
  background: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  maxHeight: 'auto',
  margin: '0',
  boxShadow: 'none',
  border: 'none',
  position: 'inherit'
});

export const Container: React.FC<ContainerProps> = ({ children, style }) => (
  <div className={styles} style={style}>
    {children}
  </div>
);

Container.defaultProps = {};
