import * as React from "react";
import styles from "./styles";

export interface InputErrorProps {
  error?: string;
  showError?: boolean;
}

export const InputError: React.FC<InputErrorProps> = ({ error, showError }) => {
  if (showError === false) {
    return null;
  }

  return (
    <div className={styles.labelContainer}>
      {error ? (
        <div className={styles.errorContaienr}>
          <span className={styles.error}>{error}</span>
        </div>
      ) : null}
    </div>
  );
};

InputError.defaultProps = {
  showError: true,
};
