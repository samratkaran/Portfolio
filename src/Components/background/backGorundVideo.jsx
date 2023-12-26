
import React from 'react';
import "./background.css"

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={require("../../Assets/video.mp4")} type="video/mp4" />
      
      </video>
    </div>
  );
};

export default VideoBackground;

