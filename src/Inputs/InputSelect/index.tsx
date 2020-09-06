import * as React from 'react';
import { classes } from 'typestyle';
import styles from './styles';

interface SelectOption<T> {
  label: string;
  value: T;
}
interface InputSelectProps<T> {
  id?: string;
  value?: T;
  label?: string;
  placeholder?: string;
  password?: boolean;
  options: SelectOption<T>[];
  onChange?: (value: T, id?: string) => void;
  containerClassname?: string;
}

export class InputSelect<T> extends React.Component<InputSelectProps<T>> {
  render() {
    const { id, value, label, onChange, options, placeholder, containerClassname } = this.props;
    const valueIndex = options.findIndex((item) => item.value === value);

    return (
      <div className={classes(styles.container, containerClassname)}>
        <div className={styles.labelContainer}>
          {label ? (
            <label className={styles.label} htmlFor={id}>
              {label}
            </label>
          ) : null}
        </div>

        <div className={styles.wrapper}>
          <select<T>
            id={id}
            className={styles.input}
            value={valueIndex}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              if (onChange) {
                onChange(options[parseInt(e.target.value)].value, id);
              }
            }}
            placeholder={placeholder}
          >
            {options.map((option, index) => (
              <option value={index} key={option.label + index}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
