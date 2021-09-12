import React from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as ReactLogo } from "../../assets/images/stream-photo.svg";

const StreamList = () => {
  let history = useHistory();

  const redirectToHome = () => {
    history.push("/streams/new");
  };

  const removeStream = () => {
    history.push("/streams/delete/55");
  };

  const editStream = () => {
    history.push("/streams/edit/55");
  };
  
  return (
    <div className="page-section">
      <h4 className="page-title">Streams</h4>

      <div className="stream-list">
        <div className="stream-item">
          <div className="stream-icon">
            <ReactLogo width="30" height="30" />
          </div>
          <div className="stream-info">
            <Link
              to={{
                pathname: "/streams/134",
              }}
              className="stream-link"
            >
              My first stream
            </Link>
            <p>This is my first stream</p>
          </div>
        </div>
        <div className="stream-item">
          <div className="stream-icon">
            <ReactLogo width="30" height="30" />
          </div>
          <div className="stream-info">
            <Link
              to={{
                pathname: "/streams/134",
              }}
              className="stream-link"
            >
              My first stream
            </Link>
            <p>This is my first stream</p>
          </div>
          <div className="actions-btn">
            <Button
              variant="primary"
              onClick={editStream}
              style={{ marginRight: "5px" }}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={removeStream}>
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Button
        variant="primary"
        onClick={redirectToHome}
        style={{ float: "right" }}
      >
        Create new stream
      </Button>
    </div>
  );
};

export default StreamList;
