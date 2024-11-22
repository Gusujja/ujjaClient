import React,{ useState,useEffect } from "react";
import VideoCard from "./VideoCard/VideoCard";
import { Container } from "react-bootstrap";
import styles from './CategoryBar.module.css'; 
import axios from 'axios'

// import Footer from "../../components/Footer/Footer";
import "./styles.css";
const Index = () => {
const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
  const [allVideos, setAllVideos] = useState([{}]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${web_Url}category`); // Replace with your backend URL
        if (!response) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
     console.log("error msg")
      }
    };

    fetchVideos();
  }, []);
  const fetchVideosByCategory = async (category) => {
    try {
      const response = await axios.get(`${web_Url}videos/search`, {
        params: {
          page:0,
          recordsPerPage:15,
          category:category,  
          subCategory:"",
        },
      });
      console.log("resposne",response.data)
      setAllVideos(response.data.data)
   // setFilteredVideos(response.data.data)
    } catch (error) {
      console.error('Error fetching videos:', error);
      throw error;
    }
  };
  // Fetch the videos from the backend when the component mounts
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${web_Url}videos`); // Replace with your backend URL
        if (!response) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setAllVideos(data.video);
      } catch (err) {
       console.log("set error")
      }
    };

    fetchVideos();
  }, []);

  return (
    <div style={{marginTop: "7.3rem"}} className="classes-page">
     <nav className={styles.categoryBar}>
      <ul className={styles.categoryList}>
      <li  className={styles.categoryItem} onClick={()=>{fetchVideosByCategory("")}}>
            All
          </li>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem} onClick={()=>{fetchVideosByCategory(category.category)}}>
            {category.category}
          </li>
        ))}
      </ul>
    </nav>
      <Container>

        <div className="video-card-row mt-4 d-grid gap-3">
          {allVideos?.map((item) => (
            <VideoCard
              id={item._id}
              embedLink={item.embedLink}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Index;
