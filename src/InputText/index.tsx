import * as React from "react";
import { classes } from "typestyle";
import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import styles from "./styles";

export interface InputTextProps {
  id?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
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
  showLabel?: boolean;
  showError?: boolean;
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
    error,
    showLabel,
    showError,
  } = props;
  const [isFocus, setFocus] = React.useState<boolean>(false);
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <div
        className={classes(styles.wrapper, {
          [styles.wrapperFocused]: isFocus,
        })}
      >
        <input
          id={id}
          className={classes(styles.input, inputClassname)}
          value={value}
          type={password ? "password" : "text"}
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
      <InputError showError={showError} error={error} />
    </div>
  );
};

InputText.defaultProps = {
  showError: true,
  showLabel: true,
};
