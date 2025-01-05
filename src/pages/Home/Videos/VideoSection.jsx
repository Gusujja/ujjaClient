import React, { useState, useEffect, useRef } from "react";
import { VideoSectionStyled } from "./styles";
import styles from "../../Videos/style.module.css";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { CgPlayButtonO } from "react-icons/cg";
import Fancybox from "../../../components/common/FancyBox";



const VideoSection = () => {
  const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
  const navigate = useNavigate();

  const handleVideoDetail = () => {
    navigate("/videos");
  };

  const [openFancyBox, setOpenFancyBox] = useState("");

  const [videoData,setVideoData]=useState([])

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await fetch(`${web_Url}videos`);
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setVideoData(data.video);
      } catch (err) {
        console.error("Error fetching all videos:", err);
      }
    };
    fetchAllVideos();
  }, [web_Url]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  const handleClose = () => {
    // setMenuVisible(null);
  };

  const handleView = (videoId) => {
    navigate(`/videos/${videoId}`); // Navigate to the video detail page
    handleClose();
  };

  return (
    <VideoSectionStyled className="mb-4" id="curriculumSection">
      <Container>
       
          <div className="videoSectionHeading">
        <h4> Unison Jiu Jitsu Academy Videos</h4>
        
          <p onClick={handleVideoDetail}>
            Click in Here to See Full Video Gallery
          </p></div>
      
        {openFancyBox !== "" ? (
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
            openFancyBox={openFancyBox}
            setFancyboxIsActive={setOpenFancyBox}
          >
            {videoData.map((video, index) => (
              <a
                id={`box-${index}`}
                data-fancybox="gallery"
                href={video.videoId}
              >
                <img src={video.image} width="200" height="150" />
              </a>
            ))}
          </Fancybox>
        ) : (
          <Carousel
            // slidesToSlide={1}
            swipeable
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            draggable
            focusOnSelect={false}
            infinite
            minimumTouchDrag={80}
            // customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass=""
          >
            {
              videoData?.map((video) => (
                <div key={video._id} className={styles.videoCard}>
                  <div className={styles.videoPreview}>
                    <iframe
                      src={video.embedLink}
                      frameBorder="0"
                      allowFullScreen
                      title={video.title}
                      className={styles.iframe}
                    ></iframe>
                  </div>
                  <div className={styles.videoInfo}>
                    <h6>{video.title.slice(0, 30) + "..."}</h6>
                    <p>{video.smallDescription.slice(0, 40) + "..."}</p>
                   
                  </div>
                </div>
              ))
            
            }
          </Carousel>
        )}
        <div className="mt-4"></div>
        {/* <HeadingWithLine
          className={"mt-4"}
          heading={`See All Videos`}
          onClick={() => navigate("/videos")}
        /> */}
      </Container>
    </VideoSectionStyled>
  );
};

export default VideoSection;
