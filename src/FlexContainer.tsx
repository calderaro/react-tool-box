import React from 'react';
import { style } from 'typestyle';

interface Props {
  flexDirection?: 'inherit' | 'initial' | 'revert' | 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: string;
  justifyContent?: string;
}

const styles = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
});

const FlexContainer: React.FC<Props> = ({ children, flexDirection, alignItems, justifyContent }) => (
  <div className={styles} style={{ flexDirection, alignItems, justifyContent }}>
    {children}
  </div>
);

FlexContainer.defaultProps = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};

export default FlexContainer;
