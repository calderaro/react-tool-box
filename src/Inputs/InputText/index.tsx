import * as React from 'react';
import { classes } from 'typestyle';
import styles from './styles';

export interface InputTextProps {
  id?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: (value: string, id?: string) => void;
  onHelp?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  containerClassname?: string;
  inputClassname?: string;
  buttonLabel?: string;
  buttonIcon?: React.ComponentType<{ className: string }>;
  onButtonClick?: () => void;
  error?: string;
}

export const InputText: React.FC<InputTextProps> = (props) => {
  const {
    id,
    value,
    label,
    onChange,
    placeholder,
    password,
    disabled,
    readOnly,
    containerClassname,
    inputClassname,
    onFocus,
    onBlur,
    onClick,
    buttonLabel,
    buttonIcon: Icon,
    onButtonClick,
    error
  } = props;
  const [isFocus, setFocus] = React.useState<boolean>(false);
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, id);
    }
  };

  return (
    <div className={classes(styles.container, containerClassname)}>
      <div className={styles.labelContainer}>
        {label ? (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        ) : null}
      </div>
      <div className={classes(styles.wrapper, { [styles.wrapperFocused]: isFocus })}>
        <input
          id={id}
          className={classes(styles.input, inputClassname)}
          value={value}
          type={password ? 'password' : 'text'}
          onChange={change}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={(e) => {
            setFocus(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocus(false);
            onBlur?.(e);
          }}
          onClick={onClick}
          autoComplete="off"
          style={{ borderRightWidth: buttonLabel ? 0 : 1 }}
        />
        {onButtonClick ? (
          <button
            className={styles.button}
            onClick={() => onButtonClick?.()}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          >
            {buttonLabel}
            {Icon ? <Icon className={styles.icon} /> : null}
          </button>
        ) : null}
      </div>
      <div className={styles.errorContaienr}>
        <span className={styles.error}>{error}</span>
      </div>
    </div>
  );
};
