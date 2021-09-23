import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const StreamDelete = (title, description) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="page-section">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete stream</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the stream with title: {}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StreamDelete;
