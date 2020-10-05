import * as React from 'react';
import { style } from 'typestyle';

export interface ListLabelProps {
  value: string;
  textAlign?: 'center' | 'left' | 'right';
}

const rowColumn = style({
  padding: '1em',
  color: '#595c97'
});

const rowColumnLabel = style({
  fontSize: '.9em',
  fontWeight: 600
});

export const ListLabel: React.FC<ListLabelProps> = ({ textAlign, value }) => (
  <div className={rowColumn} style={{ textAlign }}>
    <span className={rowColumnLabel}>{value}</span>
  </div>
);

ListLabel.defaultProps = {
  textAlign: 'center'
};
