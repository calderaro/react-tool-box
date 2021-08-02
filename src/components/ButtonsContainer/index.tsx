import * as React from 'react';
import { style } from 'typestyle';
import { Container, ContainerProps } from '../Container';

const wrapper = style({
  padding: '0 1em 0 0'
});

export const ButtonsContainer: React.FC<ContainerProps> = ({ children, ...props }) => (
  <Container {...props}>
    {React.Children.map(children, (child) => (
      <div className={wrapper}>{child}</div>
    ))}
  </Container>
);
