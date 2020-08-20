import React from 'react';
import { classes } from 'typestyle';
import styles from './styles';

interface Props {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonClassname?: string;
  containerClassname?: string;
  theme?: 'green' | 'white' | 'gray' | 'light-red';
  size?: 'normal' | 'small';
  icon?: string;
}

const Button: React.FC<Props> = (props) => {
  const { label, onClick, buttonClassname, containerClassname, theme, size, icon } = props;

  return (
    <div className={classes(styles.buttonContainer, containerClassname)}>
      <button
        className={classes(styles.button, buttonClassname, {
          [styles.buttonSmall]: size === 'small',
          [styles.buttonGreen]: theme === 'green',
          [styles.buttonWhite]: theme === 'white',
          [styles.buttonGray]: theme === 'gray',
          [styles.buttonLightRed]: theme === 'light-red'
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

export default Button;
