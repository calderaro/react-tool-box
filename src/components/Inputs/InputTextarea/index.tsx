import * as React from 'react';
import { classes } from 'typestyle';
import { InputError } from '../InputError';
import { InputLabel } from '../InputLabel';
import styles from './styles';

export interface inputTextareaProps {
  id?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string, id?: string) => void;
  onHelp?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  containerClassname?: string;
  inputClassname?: string;
  error?: string;
  showLabel?: boolean;
  showError?: boolean;
}

export const InputTextarea: React.FC<inputTextareaProps> = (props) => {
  const {
    id,
    value,
    label,
    onChange,
    placeholder,
    disabled,
    readOnly,
    containerClassname,
    inputClassname,
    onFocus,
    onBlur,
    onClick,
    showLabel,
    showError,
    error
  } = props;
  const change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value, id);
    }
  };

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <textarea
        id={id}
        className={classes(styles.input, inputClassname)}
        value={value}
        onChange={change}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onFocus={(e) => onFocus?.(e)}
        onBlur={(e) => onBlur?.(e)}
        onClick={onClick}
        autoComplete="off"
      />
      <InputError showError={showError} error={error} />
    </div>
  );
};

InputTextarea.defaultProps = {
  showError: true,
  showLabel: true
};
