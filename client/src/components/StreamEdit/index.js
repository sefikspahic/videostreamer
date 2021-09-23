import React,{ useStete, useEffect} from "react";
import { update } from "../../services/index";
import { Form, Button } from "react-bootstrap";

const StreamEdit = (data, title, description) => {
  const clickHandler = () => {
    const newdata = {
      id: data.length + 1,
      title: title,
      description: description,
    };

  }
  return (
    <div className="page-section">
      <h4 className="page-title">Edit stream</h4>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Enter title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="email" placeholder="Enter description" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StreamEdit;
