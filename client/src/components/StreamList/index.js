import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as StreamLogo } from "../../assets/images/stream-photo.svg";
import { useSelector } from "react-redux";

import axios from "axios";
const CLIENT_ID =
  "626046364349-dt83ji31j9mdhlf5k83lg0d27cjcigot.apps.googleusercontent.com";
const URL = "http://localhost:3001/streams";
const StreamList = () => {
  const user = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const redirectToHome = () => {
    history.push("/streams/new");
  };

  const removeStream = (id) => {
    if (!show === CLIENT_ID) {
      setShow(true);
    }
    history.push(`/streams/delete/${id}`);
  };

  const editStream = (id) => {
    if (!show === CLIENT_ID) {
      setShow(true);
    }
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
  useEffect(() => {
    console.log(user);
  }, [user]);

  const buttonShow = (stream) => {
    return (
      <div>
        {user.googleId === stream.userId ? (
          <div>
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
        ) : (
          <div></div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="page-section">
        <h4 className="page-title">Streams</h4>
        <div className="stream-list">
         
          {data.map((stream, idx) => {
            return (
              <div className="stream-item" key={idx}>
                <div className="stream-icon">
                  <StreamLogo width="30" height="30" />
                </div>
                <div className="stream-info">
                  <Link
                    to={{
                      pathname: `/streams/${stream.id}`,
                    }}
                    className="stream-link"
                  >
                    {stream.title}
                  </Link>
                  <p>{stream.description}</p>
                </div>
                <div className="actions-btn">
                  {user === null ? <div></div> : buttonShow(stream)}
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
