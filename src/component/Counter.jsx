import { useState } from "react";

export const Counter = () => {
  //   const { handleX } = props;
  const [x, setX] = useState(0);
  const handleX = (y) => setX(x + y);
  return (
    <>
      <h1>Counter {x}</h1>
      <button onClick={() => handleX(5)}></button>
    </>
  );
};

export const Counter1 = () => {
  return <h1>Counter1</h1>;
};
