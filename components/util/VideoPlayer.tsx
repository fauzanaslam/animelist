"use client";

import Youtube from "react-youtube";

type ParamsProps = {
  youtubeId: string;
};

const VideoPlayer = ({ youtubeId }: ParamsProps) => {
  const option = {
    width: "100%",
    heigh: "100%",
  };

  return (
    <div className="">
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={option}
      />
    </div>
  );
};

export default VideoPlayer;
