import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/Constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetVideoId } from "../Utils/videoSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
    dispatch(resetVideoId());
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap gap-6">
      {videos.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCards info={item}></VideoCards>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
