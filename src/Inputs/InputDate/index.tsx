import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles';

export interface InputDateProps {
  id?: string;
  value?: Date | null;
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: (value: Date, id?: string) => void;
  onHelp?: () => void;
  minDate?: Date;
}

export const InputDate: React.FC<InputDateProps> = (props) => {
  const { id, value, label, onChange, minDate } = props;
  const change = (value: Date) => {
    if (onChange) {
      onChange(value, id);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        {label ? (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        ) : null}
      </div>
      <DatePicker minDate={minDate} className={styles.input} selected={value} timeIntervals={60} onChange={change} />
    </div>
  );
};
