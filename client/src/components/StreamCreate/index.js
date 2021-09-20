
import React, { useState, useEffect } from "react";
import { list, insert } from "../../services/index";
import { Form, Button } from "react-bootstrap";

const StreamCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);
  const changeHandler1 = (e) => {
    setTitle(e.target.value);
  };

  const changeHandler2 = (e) => {
    setDescription(e.target.value);
  };
  const clickHandler = () => {
    const newdata = {
      id: data.length + 1,
      title: title,
      description: description,
    };

    insert(newdata, (obj) => {
      if (obj) return;
    });
    console.log(newdata);
  };
  useEffect(() => {
    list((obj) => setData(obj));
  }, []);

  return (
    <div className="page-section">
      <h4 className="page-title">Create stream</h4>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={changeHandler1} type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={changeHandler2} type="text" placeholder="Enter description" />
        </Form.Group>

        <Button variant="primary" onClick={clickHandler} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StreamCreate;
