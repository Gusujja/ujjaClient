// import React, { useState, useEffect, useRef } from "react";
// import { VideoSectionStyled } from "./styles";
// import styles from "../../Videos/style.module.css";
// import { Container } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import Carousel from "react-multi-carousel";
// import { CgPlayButtonO } from "react-icons/cg";
// import Fancybox from "../../../components/common/FancyBox";



// const VideoSection = () => {
//   const web_Url =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PRODUCTION_URL
//     : process.env.REACT_APP_DEVELOPMENT_URL;
//   const navigate = useNavigate();

//   const handleVideoDetail = () => {
//     navigate("/video");
//   };

//   const [openFancyBox, setOpenFancyBox] = useState("");

//   const [allVideos, setAllVideos] = useState([]);
//   const [currentVideo, setCurrentVideo] = useState(null); // State for the currently displayed video
//   const [loading, setLoading] = useState(false);

//   // const fetchVideos = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await fetch(`${web_Url}videos`);
//   //     if (!response.ok) throw new Error("Failed to fetch videos");
//   //     const data = await response.json();
//   //     setAllVideos(data.video);
//   //   } catch (error) {
//   //     console.error("Error fetching videos:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   useEffect(() => {
//     const fetchVideos = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`${web_Url}videos`);
//         if (!response.ok) throw new Error("Failed to fetch videos");
//         const data = await response.json();
//         console.log("Fetched videos:", data.video); // Debug fetched data
//         setAllVideos(data.video);
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchVideos();
//   }, []);
  
//   const getRandomVideo = () => {
//     if (allVideos.length > 0) {
//       const randomIndex = Math.floor(Math.random() * allVideos.length);
//       console.log("Random video index:", randomIndex, "Video:", allVideos[randomIndex]); // Debug random video
//       setCurrentVideo(allVideos[randomIndex]);
//     }
//   };
  
//   useEffect(() => {
//     console.log("All videos updated:", allVideos);
//     if (allVideos.length > 0) {
//       getRandomVideo(); // Immediate random video
//     }
  
//     const interval = setInterval(() => {
//       getRandomVideo(); // Change video every 5 seconds
//     }, 5000);
  
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [allVideos]);
  
  

//   // const getRandomVideo = () => {
//   //   if (allVideos.length > 0) {
//   //     const randomIndex = Math.floor(Math.random() * allVideos.length);
//   //     setCurrentVideo(allVideos[randomIndex]);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchVideos(); // Fetch videos on component mount
//   // }, []);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     getRandomVideo(); // Update with a random video at each interval
//   //   }, 5000); // Change video every 5 seconds

//   //   return () => clearInterval(interval); // Cleanup interval on component unmount
//   // }, [allVideos]); // Re-run interval setup when videos are loaded

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//       partialVisibilityGutter: 30,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       partialVisibilityGutter: 30,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       partialVisibilityGutter: 30,
//     },
//   };
//   const handleClose = () => {
//     // setMenuVisible(null);
//   };

//   const handleView = (videoId) => {
//     navigate(`/videos/${videoId}`); // Navigate to the video detail page
//     handleClose();
//   };

//   return (
//     <VideoSectionStyled className="mb-4" id="curriculumSection">
//       <Container>
       
//           <div className="videoSectionHeading">
//         <h4> Unison Jiu Jitsu Academy Videos</h4>
        
//           <p onClick={handleVideoDetail} style={{cursor:"pointer"}}>
//             Click in Here to See Full Video Gallery
//           </p></div>
      
//         {openFancyBox !== "" ? (
//           <Fancybox
//             options={{
//               Carousel: {
//                 infinite: false,
//               },
//             }}
//             openFancyBox={openFancyBox}
//             setFancyboxIsActive={setOpenFancyBox}
//           >
//             {allVideos.map((video, index) => (
//               <a
//                 id={`box-${index}`}
//                 data-fancybox="gallery"
//                 href={video.videoId}
//               >
//                 <img src={video.image} width="200" height="150" />
//               </a>
//             ))}
//           </Fancybox>
//         ) : (
//           <Carousel
//             // slidesToSlide={1}
//             swipeable
//             responsive={responsive}
//             additionalTransfrom={0}
//             arrows
//             autoPlaySpeed={3000}
//             centerMode={false}
//             draggable
//             focusOnSelect={false}
//             infinite
//             minimumTouchDrag={80}
//             // customTransition="all .5"
//             transitionDuration={500}
//             containerClass="carousel-container"
//             itemClass=""
//           >
            
//              {loading ? (
//         <div className="loader">Loading...</div>
//       ) : currentVideo ? (
//         allVideos?.map((video) => (
//           <div key={video._id} className={styles.videoCard}>
//             <div className={styles.videoPreview}>
//               <iframe
//                 src={video.embedLink}
//                 frameBorder="0"
//                 allowFullScreen
//                 title={video.title}
//                 className={styles.iframe}
//               ></iframe>
//             </div>
//             <div className={styles.videoInfo}>
//               <h6>{video.title.slice(0, 30) + "..."}</h6>
//               <p>{video.smallDescription.slice(0, 40) + "..."}</p>
             
//             </div>
//           </div>
//         ))
//       ) : (
//         <div>No videos available</div>
//       )}
//           </Carousel>
//         )}
//         <div className="mt-4"></div>
//         {/* <HeadingWithLine
//           className={"mt-4"}
//           heading={`See All Videos`}
//           onClick={() => navigate("/videos")}
//         /> */}
//       </Container>
//     </VideoSectionStyled>
//   );
// };

// export default VideoSection;
import React, { useState, useEffect } from "react";
import { VideoSectionStyled } from "./styles";
// import styles from "../../Videos/style.module.css";
import styles from "./VideoSection.module.css"
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";

const VideoSection = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const navigate = useNavigate();
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to shuffle the video array
  const shuffleArray = (array) => {
    return array
      .map((item) => ({ ...item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...item }) => item);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${web_Url}videos`);
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        const shuffledVideos = shuffleArray(data.video); // Shuffle videos
        setAllVideos(shuffledVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []); // Fetch and shuffle videos on mount

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <VideoSectionStyled className="mb-4" id="curriculumSection">
      <Container>
        <div className="videoSectionHeading">
          <h4>Valour Brighton Videos</h4>
          <p
            onClick={() => navigate("/video")}
            style={{ cursor: "pointer" }}
          >
            Click here to see the full video gallery
          </p>
        </div>

        {loading ? (
          <div className="loader">Loading...</div>
        ) : allVideos.length > 0 ? (
          <Carousel
            // swipeable
            // responsive={responsive}
            // autoPlaySpeed={3000}
            // infinite
            // transitionDuration={500}
            // containerClass="carousel-container"

              slidesToSlide={1}
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
            {allVideos.map((video) => (
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
                  <h6>{video.title.slice(0, 25) + "..."}</h6>
                  <p>{video.smallDescription.slice(0, 40) + "..."}</p>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div>No videos available</div>
        )}
      </Container>
    </VideoSectionStyled>
  );
};

export default VideoSection;
