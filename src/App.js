import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Counter, Counter1 } from "./component/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{x}</h1>
        {/* <button onClick={() => handleX(2)}>Update X value</button> */}
        {/* <Counter handleX={handleX} /> */}
        <Counter1 />
      </header>
    </div>
  );
}

export default App;
