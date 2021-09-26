import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as StreamLogo } from "../../assets/images/stream-photo.svg";

import axios from "axios";

const URL = "http://localhost:3001/streams";
const StreamList = (user) => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/streams/new");
  };

  const removeStream = (id) => {
    history.push(`/streams/delete/${id}`);
  };

  const editStream = (id) => {
    history.push(`/streams/edit/${id}`);
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((erorr) => console.error(erorr));
  }, []);

  return (
    <div>
      <div className="page-section">
        <h4 className="page-title">Streams</h4>
        <div className="stream-list">
            <div className="stream-item">
              <div></div>
              <div className="stream-icon">
                <StreamLogo width="30" height="30" />
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
          {data.map((stream, idx) => {
            return (
              <div className="stream-item" key={idx}>
                <div className="stream-icon">
                  <StreamLogo width="30" height="30" />
                </div>
                <div className="stream-info">
                  <Link
                    to={{
                      pathname: "/streams/134",
                    }}
                    className="stream-link"
                  >
                    {stream.title}
                  </Link>
                  <p>{stream.description}</p>
                </div>
                <div className="actions-btn">
                  <Button
                    variant="primary"
                    onClick={() => editStream(stream.id)}
                    style={{ marginRight: "5px" }}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => removeStream(stream.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          variant="primary"
          onClick={redirectToHome}
          style={{ float: "right" }}
        >
          Create new stream
        </Button>
        <div></div> <p></p>
      </div>
    </div>
  );
};

export default StreamList;
