import * as React from "react";
import style from "./styles.module.css";

interface BoxProps {
  children?: React.ReactNode;
}

export const Box = (props: BoxProps) => {
  return <div className={style.box}>{props.children}</div>;
};
