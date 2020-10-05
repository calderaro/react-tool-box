import * as React from 'react';
import { classes } from 'typestyle';
import styles from './styles';

export interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonClassname?: string;
  containerClassname?: string;
  theme?: 'green' | 'white' | 'gray' | 'light-red' | 'clear';
  size?: 'normal' | 'small';
  icon?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, buttonClassname, containerClassname, theme, size, icon } = props;

  return (
    <div className={classes(styles.buttonContainer, containerClassname)}>
      <button
        className={classes(styles.button, buttonClassname, {
          [styles.buttonSmall]: size === 'small',
          [styles.buttonGreen]: theme === 'green',
          [styles.buttonWhite]: theme === 'white',
          [styles.buttonGray]: theme === 'gray',
          [styles.buttonLightRed]: theme === 'light-red',
          [styles.buttonClear]: theme === 'clear'
        })}
        onClick={onClick}
      >
        {icon ? (
          <div className={styles.iconContainer}>
            <img alt="" src={icon} className={styles.iconImage} />
          </div>
        ) : null}
        <span>{label}</span>
      </button>
    </div>
  );
};
