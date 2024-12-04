import React from "react";
import { VideoCardStyled } from "./styles";
// import videoImg from "../../../assets/images/youtube.png";
import { useNavigate } from "react-router-dom";
import styles from "../../../AdminPortal/VideosPages/VideoList/VideoList.module.css";
import VideoDescription from "./VideoDescription";
import parse from "html-react-parser";
import { CgPlayButtonO } from "react-icons/cg";
const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
const VideoCard = ({ title, description, embedLink, id }) => {
  const navigate = useNavigate();
  const des = typeof description === "string" ? description : "";
  const trundesc = des.length > 100 ? des.slice(0, 197) + "..." : des;

  return (
    <VideoCardStyled
      className="cursor-pointer"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <div className="videos_videoCard">
        <div className={styles.videoPreview}>
          <iframe
            src={embedLink}
            frameBorder="0"
            allowFullScreen
            title={title}
            className={styles.iframe}
          ></iframe>
        </div>
        {/* <div className="image-container">
      <img src={`${web_Url}thumbnails/${img}`} alt="" /> */}
        {/* <div className="time">
          <p>3:30</p>
        </div> */}
        {/* </div> */}
        <VideoDescription
          heading={
            title && title.length > 50 ? title.slice(0, 47) + "..." : title
          }
          description={parse(trundesc)}
        />
        <div className="play_Button " >
        {/* <div className="playButton">  */}
          <span><CgPlayButtonO /></span>  <p>Play</p></div>
        {/* </div> */}
      </div>
    </VideoCardStyled>
  );
};

export default VideoCard;
