import * as React from 'react';
import { style } from 'typestyle';

export interface ListHeaderProps {
  template?: string;
}

const header = style({
  width: '100%',
  background: '#f3f3f3',
  display: 'grid'
});

export const ListHeader: React.FC<ListHeaderProps> = ({ children, template }): JSX.Element => {
  const childs = React.Children.toArray(children);
  const columns = template || `repeat(${childs.length}, 1fr)`;
  return (
    <div className={header} style={{ gridTemplateColumns: columns }}>
      {children}
    </div>
  );
};
