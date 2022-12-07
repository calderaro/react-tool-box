import { stylesheet } from "typestyle";
import { BaseInput, Colors } from "../styles";

const styles = stylesheet({
  ...BaseInput,
  selectWrapper: {
    position: "relative",
  },
  options: {
    position: "absolute",
    top: "calc(2.7em + 2px)",
    width: "100%",
    boxShadow: "0px 0px 2px 1px rgba(235,235,235,1)",
    borderRadius: 2,
    overflow: "hidden",
  },
  option: {
    padding: ".5em",
    background: "#FFF",
    width: "100%",
    color: Colors.labelColor,
    $nest: {
      "&:hover": {
        background: Colors.borderColor,
      },
    },
  },
});

export default styles;
