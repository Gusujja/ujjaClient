import React from "react";
import { VideoCardStyled } from "./styles";
// import videoImg from "../../../assets/images/youtube.png";
import { useNavigate } from "react-router-dom";
import VideoDescription from "./VideoDescription";
import parse from 'html-react-parser';
const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
const VideoCard = ({title,description,img ,id}) => {
  const navigate = useNavigate();
  const des = typeof description === 'string' ? description : '';
  return (
    <VideoCardStyled
      className="cursor-pointer"
      onClick={() => navigate(`/videos/${id}`)}
    >
      <div className="image-container">
      <img src={`${web_Url}thumbnails/${img}`} alt="" />
        {/* <div className="time">
          <p>3:30</p>
        </div> */}
      </div>
      <VideoDescription
        heading={title}
        description={parse(des)}     
      />
    </VideoCardStyled>
  );
};

export default VideoCard;
