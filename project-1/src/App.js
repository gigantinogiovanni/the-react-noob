import React, {useState} from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleRemove() {
    if (count > 0) setCount(count - 1);
  }
  
  function handleReset() {
    if (count === 0) alert("The value is already 0!");
    else {
      setCount(0);
      alert("DONE!");
    }
  }
  return (
    <>
      <h1>The current value is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
