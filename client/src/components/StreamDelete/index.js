import React, { useState, useEffect } from "react";
import { remove, read } from "../../services/index";
import { useHistory, useParams } from "react-router";

import { Modal, Button } from "react-bootstrap";

const StreamDelete = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {id} = useParams();
  const [data, setData] = useState([]);
  
  const toggle = () => setIsOpen(!isOpen);

  const history = useHistory();

  useEffect(() => {
    if (id !== "0") {
      read( id, data => {
        if (data) setData(data);
      });
    }
  }, [id]);

  const del = () => {
    remove( id, data => {
      history.push("/");
    });
  };

  return (
    <div className="page-section">
      <Modal show={isOpen} onHide={toggle}>
        <Modal.Header>
          <Modal.Title>Delete stream</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the stream with title: {}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={toggle} onClick={del}>
            Delete
          </Button>
          <Button variant="secondary" onClick={() => {
            toggle();
            history.push("/")
          }}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StreamDelete;
