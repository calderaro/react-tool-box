import * as React from 'react';
import { style } from 'typestyle';
import { FlexContainer, FlexContainerProps } from '../FlexContainer';

const wrapper = style({
  padding: '0 1em 0 0'
});

export const ButtonsContainer: React.FC<FlexContainerProps> = ({ children, ...props }) => (
  <FlexContainer {...props}>
    {React.Children.map(children, (child) => (
      <div className={wrapper}>{child}</div>
    ))}
  </FlexContainer>
);
