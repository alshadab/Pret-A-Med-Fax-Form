import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import "../Todo/Todo.css";
const Todo = () => {
  const [modalShow, setModalShow] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const handleText = () => {
    setModalShow(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    setText(fname);
    setText2(lname);
  };

  return (
    <div className="body">
      <Card style={{ minWidth: "18rem", minHeight: "500px" }}>
        <Card.Body className="cb">
          <Card.Title style={{ textAlign: "center" }}>Todo List</Card.Title>
          <Card.Text>
            <h4>First Name:{text}</h4>
            <h4>Last Name:{text2}</h4>
          </Card.Text>
          <Button
            className="btn"
            onClick={() => setModalShow(true)}
            variant="warning"
          >
            Create todo
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create A Todo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                placeholder="Enter your First name"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                placeholder="Enter your last name"
              />
            </Form.Group>
            <Modal.Footer>
              <Button type="submit" onClick={() => handleText()}>
                Create
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Todo;
