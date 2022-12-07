import * as React from "react";
import { classes } from "typestyle";
import styles from "./styles";

export interface InputTextOnlyProps {
  id?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  password?: boolean;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  inputClassname?: string;
  style?: React.CSSProperties;
}

export const InputTextOnly: React.FC<InputTextOnlyProps> = (props) => {
  const {
    id,
    value,
    onChange,
    placeholder,
    password,
    disabled,
    readOnly,
    inputClassname,
    onFocus,
    onBlur,
    onClick,
    style,
  } = props;
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
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
        onFocus?.(e);
      }}
      onBlur={(e) => {
        onBlur?.(e);
      }}
      onClick={onClick}
      autoComplete="off"
      style={style}
    />
  );
};
