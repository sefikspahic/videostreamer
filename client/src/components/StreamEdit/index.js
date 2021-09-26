import React, { useEffect, useState } from "react";
import {read, insert, update, remove } from "../../services/index";
import { Form, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

import axios from "axios";
const URL = "http://localhost:3001/streams";

const StreamEdit = () => {
  const [requiredMessage, setMessage] = useState("")
  const {id} = useParams();
  const [data, setData] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    // short version for this - !id
    if (id === undefined || id === null) {
       return;
    }
    else {
      read(id, data => {
        if (data) setData(data);
      });
    }
  }, [id]);


  const onChange  =(e) =>{
    const { name, value } = e.target;
    setData({
      ...data, 
      [name]: value
    })
  };

  const save = () => {
    if (!data.title || !data.description) {
        setMessage('*This field is required');
    } 
    else {
      update(id, data, () => {
        if (data) return history.push('/');
        console.log('There was an error during saving data');
      })
    }
}
  return (
    <div className="page-section">
      <h4 className="page-title">Edit stream</h4>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter title" value={data.title} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name="description" placeholder="Enter description" value={data.description} onChange={onChange}/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={save}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StreamEdit;
