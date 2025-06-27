import { useState } from "react";

export const InputData = () => {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
  });

  const submit = () => {
    console.log(input);
  };
  return (
    <>
      <h1>Input field</h1>
      <label for="fname">First name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={input.fname}
        onChange={(e) => setInput({ ...input, fname: e.target.value })}
      />
      <label for="lname">Last name:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={input.lname}
        onChange={(e) => setInput({ ...input, lname: e.target.value })}
      />
      <button onClick={submit}>Button</button>
    </>
  );
};
