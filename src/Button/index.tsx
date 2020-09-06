import * as React from 'react';
import { classes } from 'typestyle';
import { button, buttonContainer, ButtonTheme } from './styles';

interface Props {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonClassname?: string;
  containerClassname?: string;
  theme?: 'green' | 'white' | 'gray' | 'blue';
  customTheme?: ButtonTheme;
  size?: 'normal' | 'small';
  icon?: string;
}

const Button: React.FC<Props> = (props) => {
  const { label, onClick, buttonClassname, containerClassname } = props;

  return (
    <div className={classes(buttonContainer, containerClassname)}>
      <button className={classes(button, buttonClassname)} onClick={onClick}>
        <span>{label}</span>
      </button>
    </div>
  );
};

export default Button;
