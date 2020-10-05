import * as React from 'react';
import styles from './styles';

export interface InputLabelProps {
  id?: string;
  label?: string;
  showLabel?: boolean;
}

export const InputLabel: React.FC<InputLabelProps> = ({ id, label, showLabel }) => {
  if (showLabel === false) {
    return null;
  }

  return (
    <div className={styles.labelContainer}>
      {label ? (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

InputLabel.defaultProps = {
  showLabel: true
};
