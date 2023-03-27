import * as React from "react";
import { classes } from "typestyle";
import { InputLayout } from "../InputLayout";
import styles from "./styles";

export interface InputTextWithLayoutProps {
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
  error?: string;
  showLabel?: boolean;
  showError?: boolean;
  children?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
}

export const InputTextWithLayout: React.FC<InputTextWithLayoutProps> = (
  props
) => {
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
    error,
    showLabel,
    showError,
    children,
    type,
  } = props;
  const [isFocus, setFocus] = React.useState<boolean>(false);
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
    <InputLayout
      id={id}
      label={label}
      containerClassname={containerClassname}
      error={error}
      showLabel={showLabel}
      showError={showError}
      isFocus={isFocus}
    >
      <input
        id={id}
        className={classes(styles.input, inputClassname)}
        value={value}
        type={password ? "password" : type}
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
      />
      {children}
    </InputLayout>
  );
};

InputTextWithLayout.defaultProps = {
  showError: true,
  showLabel: true,
};
