import React, {useState} from "react";
import { Button } from 'react-bootstrap';

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
      <Button variant="success" onClick={() => setCount(count + 1)}>Add</Button>{" "}
      <Button variant="danger" onClick={handleRemove}>Remove</Button>{" "}
      <Button variant="secondary" onClick={handleReset}>Reset</Button>
    </>
  );
}
