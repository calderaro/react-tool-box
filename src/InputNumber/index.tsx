import React, { useState, useEffect } from "react";
import { classes } from "typestyle";
import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import styles from "./styles";

export interface InputNumberProps {
  id?: string;
  value?: number;
  label?: string;
  placeholder?: string;
  onChange?: (value: number, id?: string) => void;
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
  max?: number;
}

export const InputNumber: React.FC<InputNumberProps> = (props) => {
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
    buttonLabel,
    buttonIcon: Icon,
    onButtonClick,
    error,
    showLabel,
    showError,
    max,
  } = props;
  const [isFocus, setFocus] = useState<boolean>(false);
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    if (localValue === "" && value === 0) {
      // is first render and value is 0
      setLocalValue("0");
    } else if (
      Number(localValue) === value ||
      (localValue === "-" && value === 0)
    ) {
      // is same value do nothing for now
    } else {
      // is not same value set localValue to be the same as value
      // value prop was changed
      setLocalValue(value?.toString() || "");
    }
  }, [value]);

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <div
        className={classes(styles.wrapper, {
          [styles.wrapperFocused]: isFocus,
        })}
      >
        <input
          value={localValue}
          id={id}
          className={classes(styles.input, inputClassname)}
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
          onChange={(e) => {
            const selection = e.target.selectionStart
              ? e.target.selectionStart
              : 0;
            const c = e.target.value
              .trim()
              .replace(/\,/g, "")
              .replace(/((?![0-9.,-]).)*/g, "");

            const n = Number(c === "-" ? c + 0 : c);

            const toAdd = c.length - e.target.value.length;

            if (!isNaN(n)) {
              if (max !== undefined && n > max) {
                setLocalValue(handleNumber(max));
                onChange?.(max);
                return;
              }

              e.target.setSelectionRange(selection + toAdd, selection + toAdd);
              setLocalValue(c);
              onChange?.(n);
            }
          }}
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

InputNumber.defaultProps = {
  showError: true,
  showLabel: true,
};

function handleNumber(value: number) {
  return value.toLocaleString("en", {
    maximumFractionDigits: 2,
  });
}
