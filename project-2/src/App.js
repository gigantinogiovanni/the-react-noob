import React, {useState} from "react"

function App() {
  const [inputval, setinputval] = useState("");
  const [list, setlist] = useState([]);
  function handleInput(event) {
    setinputval(event.target.value);
  }
  function handleAdd(event) {
    event.preventDefault();
    setinputval("");
    setlist([...list, inputval]);
  }
  return (
    <>
      <h1>TO-DO</h1>
      <form onSubmit={handleAdd}>
        <label htmlFor="new-todo">What do you want to add?</label>
        <input id="new-todo" onChange={handleInput} value={inputval}/>
        <button>Add item</button>
      </form>
      
      <ul>
        {
          list.map((value, key) => <li key={key}>{value}</li>)
        }
      </ul>
    </>
  );
}

export default App;
