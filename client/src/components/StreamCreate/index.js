import React, { useState, useEffect } from "react";
import { insert } from "../../services/index";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const StreamCreate = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [data, setData] = useState({
    title: "",
    description: "",
    userId: user.googleId,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    const newItem = {
      title: data.title,
      description: data.description,
      userId: data.userId,
    };

    insert(newItem, () => {
      history.push("/");
    });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="page-section">
      <h4 className="page-title">Create stream</h4>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            onChange={onChange}
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            onChange={onChange}
            type="text"
            placeholder="Enter description"
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StreamCreate;
