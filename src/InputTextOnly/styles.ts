import { stylesheet } from "typestyle";
import { Colors, Sizes } from "../styles";

const styles = stylesheet({
  input: {
    width: "100%",
    height: "2.7em",
    fontSize: "1em",
    background: "#FEFEFE",
    borderRadius: Sizes.borderRadius,
    padding: "0 0.5em",
    outline: 0,
    borderColor: Colors.borderColor,
    borderWidth: "0px",
    borderStyle: "solid",
    display: "block",
    $nest: {
      "&:disabled": {
        background: "#E4E8F0",
      },
    },
  },
});

export default styles;
