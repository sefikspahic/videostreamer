import React from "react";

const StreamShow = () => {
  return (
    <div className="page-section">
      <div className="video-box">
        <video width="100%" height="450" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>
      <h2>My first stream</h2>
      <p>This is my first stream</p>
    </div>
  );
};

export default StreamShow;
