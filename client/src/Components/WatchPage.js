import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import YouTubeComments from "./CommentSection";
import { setVideoId } from "../Utils/videoSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(setVideoId(videoId));
  }, []);
  return (
    
    <div className="px-5">
      <iframe

      className="rounded-lg mt-4"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="Google launched its DSA course 🔥"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <YouTubeComments />
    </div>
  );
};

export default WatchPage;
