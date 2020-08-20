import * as React from 'react';
import { style } from 'typestyle';
import FlexContainer from '../FlexContainer';

const wrapper = style({
  padding: '0 1em 0 0'
});

const ButtonsContainer: React.FC = ({ children }) => (
  <FlexContainer>
    {React.Children.map(children, (child) => (
      <div className={wrapper}>{child}</div>
    ))}
  </FlexContainer>
);

export default ButtonsContainer;
