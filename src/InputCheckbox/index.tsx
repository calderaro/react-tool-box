import * as React from "react";
import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import styles from "./styles";

export interface InputCheckbox {
  id?: string;
  value?: boolean;
  label?: string;
  text?: string | React.ElementType;
  onChange?: (value: boolean, id?: string) => void;
  showLabel?: boolean;
  showError?: boolean;
  error?: string;
}

export const InputCheckbox: React.FC<InputCheckbox> = (props) => {
  const { id, value, label, showError, showLabel, error, onChange } = props;
  return (
    <div className={styles.container}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
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
        <InputError showError={showError} error={error} />
      </div>
    </div>
  );
};

InputCheckbox.defaultProps = {
  showLabel: true,
  showError: true,
};
