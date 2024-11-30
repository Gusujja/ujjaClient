
import React, { useEffect, useState } from "react";
import { VideoDetailsStyled } from "./styles";
import { Container } from "react-bootstrap";
import VideoDescription from "../VideoCard/VideoDescription";
import axios from 'axios';
import styles from '../../../AdminPortal/VideosPages/VideoList/VideoList.module.css'
import { SmallHeadingBlack } from ".././../../components/GlobalStyle";
import parse from 'html-react-parser';

import { useNavigate, useParams } from "react-router-dom/dist";
import VideoDescriptionOfDetail from "../VideoCard/VideoDescriptionOfDetail";
const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
const VideoDetails = () => {
  const { videoId } = useParams();
  // const videoData = data.find((item) => item.id === videoId);
  const [video,setVideo]=useState()
  const [allVideos,setAllVideos]=useState([])
  useEffect(()=>{
    const fetchVideos = async () => {
    try {
      const response = await axios.post(`${web_Url}videos/${videoId}`); // Replace with your backend URL
    
      console.log("resposne",response)
      setVideo(response.data);
      const res = await fetch(`${web_Url}videos`); // Replace with your backend URL
      const data = await res.json();
      setAllVideos(data.video);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  fetchVideos();
  
  },[videoId])
  // console.log("video Data",data,videoId,videoData)
  
  console.log("vdeoby id",allVideos)
  const description = typeof video?.description === 'string' ? video.description : '';
  return (
    <VideoDetailsStyled>
      <Container>
        <div className="d-flex flex-wrap gap-3" style={{    marginLeft: "-50px",
    marginRight: "-50px"}}>
          <div className="video-details-section">
            <div className="video-container">
              <iframe
              style={{borderRadius:"10px"}}
                width="100%"
                height="100%"
                src={video?.embedLink}
                title="1st Lesson Fundamentals Single Hand Guard pass - Brighton Marina Jiu Jitsu Academy - www.bmjja.co.uk"
                frameborder="10x"
           
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="title my-3">
              <SmallHeadingBlack style={{fontSize:'24px'}}>{video?.title}</SmallHeadingBlack>
            </div>
            <div className="details">{parse(description)}</div>
          </div>

          <div className="videos-section d-flex flex-column gap-3">
            {allVideos?.map((item) => (

              <VideoCard id={item._id}  embedLink={item.embedLink} title={item.title} smallDescription={item.smallDescription} />
            ))}
            {/* {Array.isArray(allVideos) && allVideos?.map((item) => (
  <VideoCard id={item._id} embedLink={item.embedLink} title={item.title} />
))} */}
          </div>
        </div>
      </Container>
    </VideoDetailsStyled>
  );
};

export default VideoDetails;

const VideoCard = ({ embedLink, title, id, smallDescription }) => {
  console.log("embedLink",embedLink)
  const navigate = useNavigate();
  return (
    <div
      className="video-card d-flex align-items-center justify-content-start"
      onClick={() =>{
        navigate(`/videos/${id}`)
        window.location.reload()
      }
    }
    >
      {/* <div className="image">
      <img src={`${web_Url}thumbnails/${img}`} alt="" />
      </div> */}
        <div className="image">
              <iframe
                width="100%"
                height="100%"
                style={{borderRadius:"8px"}}
                src={embedLink}
                title="1st Lesson Fundamentals Single Hand Guard pass - Brighton Marina Jiu Jitsu Academy - www.bmjja.co.uk"
                frameborder="10x"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
      <VideoDescriptionOfDetail
        heading={title}
        smallDescription={smallDescription}
        //  views={"3.5M"}
        // time={"1 year ago"}
      />
    </div>
  );
};