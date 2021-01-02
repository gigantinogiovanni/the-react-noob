import React, { useState } from "react";
import { Container, Button, Form, ListGroup } from "react-bootstrap";
function App() {
  const [inputval, setinputval] = useState("");
  const [list, setlist] = useState([]);
  function handleInput(event) {
    setinputval(event.target.value);
  }
  function handleAdd(event) {
    event.preventDefault();
    if (inputval !== "") {
      setinputval("");
      setlist([...list, inputval]);  
    }
  }
  return (
    <Container>
      <h1>TO-DO</h1>
      <Form onSubmit={handleAdd}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>What do you want to add?</Form.Label>
          <Form.Control type="todo" placeholder="Enter something to do!" onChange={handleInput} value={inputval}/>
          <Button variant="primary" type="submit">Add item!</Button>{" "}
        </Form.Group>
      </Form>

      <ListGroup>
        {list.map((value, key) => (
          <ListGroup.Item key={key}>{value}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
