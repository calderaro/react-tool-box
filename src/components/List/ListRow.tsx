import * as React from 'react';
import { style } from 'typestyle';

export interface ListRowProps {
  textAlign?: 'center' | 'left' | 'right';
  template?: string;
}

const row = style({
  display: 'grid',
  borderBottom: '1px solid #f2f4f8'
});

export const ListRow: React.FC<ListRowProps> = ({ children, template }) => {
  const childs = React.Children.toArray(children);
  const columns = template || `repeat(${childs.length}, 1fr)`;
  return (
    <div className={row} style={{ gridTemplateColumns: columns }}>
      {children}
    </div>
  );
};

ListRow.defaultProps = {
  textAlign: 'center'
};
