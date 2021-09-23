import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ReactComponent as ReactLogo } from "../../assets/images/stream-photo.svg";

const URL = "http://localhost:3001/streams";
const StreamList = () => {
  const [data, setData] = useState([]);
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
      <div className="navbar-brand">
        {" "}
        <Button variant="danger" href="#">
          <BiLogOutCircle /> Sing Out
        </Button>
      </div>
      <div className="page-section">
        <h4 className="page-title">Streams</h4>
        <div className="stream-list">
          <div className="stream-item">
            <div></div>
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
          {data.map((obj) => {
            return (
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
                    {obj.title},
                  </Link>
                  <p>{obj.description}</p>
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
