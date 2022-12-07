import { stylesheet } from "typestyle";
import { BaseInput, Colors, Sizes } from "../styles";

const styles = stylesheet({
  input: {
    width: "100%",
    height: "100%",
    fontSize: "1em",
    background: "#FEFEFE",
    boxSizing: "border-box",
    borderRadius: Sizes.borderRadius,
    padding: "0 0.5em",
    outline: 0,
    display: "block",
    border: 0,
    $nest: {
      "&:disabled": {
        background: "#E4E8F0",
      },
    },
  },
});

export default styles;
