
import React, { useState, useEffect } from "react";
import { list, insert } from "../../services/index";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";

const StreamCreate = () => {
  const history = useHistory();

  const [data, setData] = useState({
    title: "",
    description: ""
  });
 
  const onChange = (e) => {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  
  const onSubmit = () => {
    const newItem = {
      title: data.title,
      description: data.description
    };

    insert(newItem, () => { 
      history.push("/");
    });
  };

  return (
    <div className="page-section">
      <h4 className="page-title">Create stream</h4>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" onChange={onChange} type="text" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" onChange={onChange} type="text" placeholder="Enter description" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
  
    </div>
  );
};

export default StreamCreate;
