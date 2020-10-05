import * as React from 'react';
import { style } from 'typestyle';

export interface FlexContainerProps {
  flexDirection?: 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: string;
  justifyContent?: string;
  padding?: number | string;
}

const styles = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});

export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  flexDirection,
  alignItems,
  justifyContent,
  padding
}) => (
  <div className={styles} style={{ flexDirection, alignItems, justifyContent, padding }}>
    {children}
  </div>
);

FlexContainer.defaultProps = {
  padding: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};
