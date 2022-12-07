import { stylesheet } from "typestyle";
import { BaseInput } from "../styles";

const styles = stylesheet({
  ...BaseInput,

  input: {
    ...BaseInput.input,
    height: "3em !important",
  },
});

export default styles;
