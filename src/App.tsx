import { useState } from "react";
import "./App.css";
import { InputText } from "./InputText";
import { InputTextOnly } from "./InputTextOnly";
import { InputTextWithLayout } from "./InputTextWithLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <InputTextOnly />

      <InputText />
      <InputTextWithLayout>
        <button>Holis</button>
      </InputTextWithLayout>
    </div>
  );
}

export default App;
