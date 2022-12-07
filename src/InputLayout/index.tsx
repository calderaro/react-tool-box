import * as React from "react";
import { classes } from "typestyle";
import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import styles from "./styles";

export interface InputLayoutProps {
  id?: string;
  label?: string;
  containerClassname?: string;
  error?: string;
  showLabel?: boolean;
  showError?: boolean;
  isFocus?: boolean;
}
export const LayoutInputStyle = styles.input;

export const InputLayout: React.FC<
  React.PropsWithChildren<InputLayoutProps>
> = (props) => {
  const {
    id,
    label,
    containerClassname,
    error,
    showLabel,
    showError,
    isFocus,
    children,
  } = props;

  return (
    <div className={classes(styles.container, containerClassname)}>
      <InputLabel showLabel={showLabel} label={label} id={id} />
      <div
        className={classes(styles.wrapper, {
          [styles.wrapperFocused]: isFocus,
        })}
      >
        <div className={LayoutInputStyle}>{children}</div>
      </div>
      <InputError showError={showError} error={error} />
    </div>
  );
};

InputLayout.defaultProps = {
  showError: true,
  showLabel: true,
};
