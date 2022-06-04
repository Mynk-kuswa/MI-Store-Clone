import React from "react";
import "../styles/Videos.css"
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className="Videos">
      {videos.map((item, index) => (
        <VideoCard
          key={item.image}
          src={item.image}
          index={index}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Videos;
