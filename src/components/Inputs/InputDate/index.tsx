import * as React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';
import styles from './styles';

interface InputDateProps {
  id?: string;
  value?: Date | null;
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: (value: Date, id?: string) => void;
  onHelp?: () => void;
  minDate?: Date;
  showLabel?: boolean;
  showError?: boolean;
  error?: string;
}

export const InputDate: React.FC<InputDateProps> = (props) => {
  const { id, value, label, onChange, minDate, showLabel, showError, error } = props;

  return (
    <div className={styles.container}>
      <InputLabel showLabel={showLabel} label={label} />
      <DatePicker
        minDate={minDate}
        className={styles.input}
        selected={value}
        timeIntervals={60}
        onChange={(value: Date) => onChange?.(value, id)}
      />
      <InputError showError={showError} error={error} />
    </div>
  );
};

InputDate.defaultProps = {
  showLabel: true,
  showError: true
};
