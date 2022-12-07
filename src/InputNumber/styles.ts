import { stylesheet } from "typestyle";
import { BaseInput } from "../styles";

const styles = stylesheet({
  ...BaseInput,
  button: {
    border: 0,
    height: "100%",
    padding: "0 .9em",
    background: "#4b7af3",
    color: "#FFF",
    fontSize: ".9em",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "3.2em",
    outline: 0,
  },
  icon: {
    height: "1.4em",
    width: "1.4em",
    display: "block",
    objectFit: "contain",
  },
});

export default styles;
