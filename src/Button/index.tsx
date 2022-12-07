import * as React from "react";
import { classes } from "typestyle";
import styles from "./styles";

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  buttonClassname?: string;
  containerClassname?: string;
  theme?: "green" | "white" | "gray" | "light-red" | "clear";
  size?: "normal" | "small";
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  props
) => {
  const {
    onClick,
    buttonClassname,
    containerClassname,
    theme,
    size,
    children,
    type,
  } = props;

  return (
    <div className={classes(styles.buttonContainer, containerClassname)}>
      <button
        type={type}
        onClick={onClick}
        className={classes(styles.button, buttonClassname, {
          [styles.buttonSmall]: size === "small",
          [styles.buttonGreen]: theme === "green",
          [styles.buttonWhite]: theme === "white",
          [styles.buttonGray]: theme === "gray",
          [styles.buttonLightRed]: theme === "light-red",
          [styles.buttonClear]: theme === "clear",
        })}
      >
        {children}
      </button>
    </div>
  );
};
