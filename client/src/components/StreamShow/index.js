import React, { useState, useEffect, useRef } from "react";
import { read } from "../../services";
import { useParams } from "react-router";
import flv from "flv.js";

const StreamShow = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const video = useRef();

  useEffect(() => {
    read(id, (streams) => setData(streams));

    initializeVideoStream();

    return () => setData([]);
  }, [id]);

  const initializeVideoStream = () => {
    let player = flv.createPlayer({
      type: "flv",  
      url: `http://localhost:8000/live/${id}.flv`,
    });

    player.attachMediaElement(video.current);
    player.load();
  };

  return (
    <div className="page-section">
      <div className="video-box">
        <video ref={video} width="100%" height="450" controls />
      </div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default StreamShow;
