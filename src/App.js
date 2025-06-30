import { Route, Routes } from "react-router-dom";
import "./App.css";
import { InputData } from "./component/Input";
import { Counter } from "./component/Counter";

function App() {
  return (
    <>
      <Routes>
        {false ? (
          <Route path="/Input" element={<InputData />} />
        ) : (
          <Route path="/Input" element={<Counter />} />
        )}
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
