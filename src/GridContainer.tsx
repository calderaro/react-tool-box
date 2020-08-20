import React from 'react';
import { style } from 'typestyle';

const styles = style({
  width: '100%',
  display: 'grid',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
});

interface Props {
  gap?: string;
  columns?: string;
  justifyContent?: string;
  alignItems?: string;
}

const GridContainer: React.FC<Props> = ({ children, gap, columns, justifyContent, alignItems }) => (
  <div className={styles} style={{ gap: gap || '0em', gridTemplateColumns: columns, justifyContent, alignItems }}>
    {children}
  </div>
);

GridContainer.defaultProps = {
  gap: '0',
  columns: '1fr',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
};

export default GridContainer;
