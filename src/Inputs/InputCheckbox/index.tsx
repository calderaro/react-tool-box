import * as React from 'react';
import styles from './styles';

export interface InputCheckbox {
  id?: string;
  value?: boolean;
  label?: string;
  text?: string | React.ElementType;
  onChange?: (value: boolean, id?: string) => void;
}

export const InputCheckbox: React.FC<InputCheckbox> = (props) => {
  const { id, value, label, text, onChange } = props;
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        {label ? (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        ) : null}
      </div>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          id={id}
          className={styles.input}
          checked={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
              onChange(e.target.checked, id);
            }
          }}
        />
        <label htmlFor={id} className={styles.text}>
          {text}
        </label>
      </div>
    </div>
  );
};
