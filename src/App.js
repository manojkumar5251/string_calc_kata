import "./App.css";
import React, { useState } from "react";
import { add } from "./utils";

function App() {
  const [result, setResult] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="input-string">
        <label htmlFor="textbox">Input String</label>
        <input
          id="textbox"
          data-testid="textbox"
          value={inputValue}
          onChange={({ target }) => {
            setInputValue(target.value);
          }}
        />
      </div>

      <button
        id="calc"
        data-testid="calc"
        onClick={() => {
          setResult(add(inputValue));
        }}
      >
        Calculate
      </button>

      <div data-testid="result">{result}</div>
    </div>
  );
}

export default App;
