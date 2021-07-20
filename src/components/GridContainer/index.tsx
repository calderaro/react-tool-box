import * as React from 'react';
import { style } from 'typestyle';

const styles = style({
  width: '100%',
  display: 'grid',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
});

export interface GridContainerProps {
  padding?: number | string;
  gap?: number | string;
  columns?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  gap,
  padding,
  columns,
  justifyContent,
  alignItems,
  background
}) => (
  <div
    className={styles}
    style={{
      gap,
      padding,
      gridTemplateColumns: columns,
      justifyContent,
      alignItems,
      background: background || 'none'
    }}
  >
    {children}
  </div>
);

GridContainer.defaultProps = {
  padding: 0,
  gap: 0,
  columns: '1fr',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
};
