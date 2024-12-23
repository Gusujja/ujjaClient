// import React,{ useState,useEffect } from "react";
// import VideoCard from "./VideoCard/VideoCard";
// import { Container } from "react-bootstrap";
// import styles from './CategoryBar.module.css'; 
// import axios from 'axios'

// // import Footer from "../../components/Footer/Footer";
// import "./styles.css";
// const Index = () => {

// const web_Url =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PRODUCTION_URL
//     : process.env.REACT_APP_DEVELOPMENT_URL;
//   const [allVideos, setAllVideos] = useState([{}]);
//   const [categories, setCategories] = useState([]);
//   const [subcategories,setSubcategories]=useState([]);
//   const [category,setCategory]=useState("")
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch(`${web_Url}category`); // Replace with your backend URL
//         if (!response) {
//           throw new Error("Failed to fetch videos");
//         }
//         const data = await response.json();
//         setCategories(data);
       

//       } catch (err) {
//      console.log("error msg")
//       }
//     };

//     fetchVideos();
//   }, []);
//   const fetchVideosByCategory = async (subCategory) => {
//     try {
//       const response = await axios.get(`${web_Url}videos/search`, {
//         params: {
//           page:0,
//           recordsPerPage:15,
//           category:category,  
//           subCategory:subCategory,
//         },
//       });
//       setAllVideos(response.data.data)
//    // setFilteredVideos(response.data.data)
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//       throw error;
//     }
//   };
//   // Fetch the videos from the backend when the component mounts
//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch(`${web_Url}videos`); // Replace with your backend URL
//         if (!response) {
//           throw new Error('Failed to fetch videos');
//         }
//         const data = await response.json();
//         setAllVideos(data.video);
//       } catch (err) {
//        console.log("set error")
//       }
//     };

//     fetchVideos();
//   }, []);
// useEffect(()=>{
//   const categoryObj = categories.find(
//     (cat) => cat.category === category
//   );
//   setSubcategories(categoryObj ? categoryObj.subcategories : []);
// },[category])
//   console.log("category",category,subcategories)
//   return (
//     <div style={{marginTop: "7.3rem"}} className="classes-page">
//      <nav className={styles.categoryBar}>
//       <ul className={styles.categoryList}>
//       <li  className={styles.categoryItem} onClick={()=>{fetchVideosByCategory("")}}>
//             All
//           </li>
//         {categories.map((category, index) => (
//           <li key={index} className={styles.categoryItem} onClick={()=>{setCategory(category.category)}}>
//             {category.category}
//           </li>
//         ))}
//       </ul>
//     </nav>
//     <nav className={styles.categoryBar}>
//       <ul className={styles.categoryList}>
//         {subcategories.length > 0 && subcategories.map((subcategory, index) => (
//           <li key={index} className={styles.categoryItem} onClick={()=>{fetchVideosByCategory(subcategory)}}>
//             {subcategory}
//           </li>
//         ))}
//       </ul>
//     </nav>
    
//       <Container>

//         <div className="video-card-row mt-4 d-grid gap-3">
//           {allVideos?.map((item) => (
//             <VideoCard
//               id={item._id}
//               embedLink={item.embedLink}
//               title={item.title}
//               description={item.description}
//             />
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Index;
import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard/VideoCard";
import { Container } from "react-bootstrap";
import styles from './CategoryBar.module.css'; 
import axios from 'axios';

const Index = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;
  const [allVideos, setAllVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  // Fetch all videos on initial render
  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await fetch(`${web_Url}videos`);
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setAllVideos(data.video);
      } catch (err) {
        console.error("Error fetching all videos:", err);
      }
    };
    fetchAllVideos();
  }, [web_Url]);

  // Fetch categories on initial render
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${web_Url}category`);
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, [web_Url]);

  // Update subcategories when active category changes
  useEffect(() => {
    const categoryObj = categories.find((cat) => cat.category === activeCategory);
    setSubcategories(categoryObj ? categoryObj.subcategories : []);
  }, [activeCategory, categories]);

  // Fetch videos by category or subcategory
  const fetchVideosByCategory = async (subCategory = "") => {
    try {
      const response = await axios.get(`${web_Url}videos/search`, {
        params: {
          page: 0,
          recordsPerPage: 15,
          category: activeCategory,
          subCategory: subCategory,
        },
      });
      setAllVideos(response.data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebar}>
        <ul className={styles.categoryList}>
          <li
            className={styles.categoryItem}
            onClick={() => {
              setActiveCategory("");
              setSubcategories([]);
              // Fetch all videos when "All" is clicked
              const fetchAllVideos = async () => {
                try {
                  const response = await fetch(`${web_Url}videos`);
                  if (!response.ok) throw new Error("Failed to fetch videos");
                  const data = await response.json();
                  setAllVideos(data.video);
                } catch (err) {
                  console.error("Error fetching all videos:", err);
                }
              };
              fetchAllVideos();
            }}
          >
            All
          </li>
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <li
                className={`${styles.categoryItem} ${activeCategory === category.category ? styles.activeCategory : ""}`}
                onClick={() => setActiveCategory(category.category)}
              >
                {category.category}
              </li>
              {activeCategory === category.category && (
                <ul className={styles.subcategoryList}>
                  {subcategories.map((subcategory, idx) => (
                    <li
                      key={idx}
                      className={styles.subcategoryItem}
                      onClick={() => fetchVideosByCategory(subcategory)}
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>

      <div className={styles.videoContent}>
        <Container>
          <div className="video-card-row videoGrid">
            {allVideos?.length === 0 ? (
              <div className={styles.noVideosMessage}>No videos available</div>
            ) : (
              allVideos?.map((item) => (
                <VideoCard
                  key={item._id}
                  id={item._id}
                  embedLink={item.embedLink}
                  title={item.title}
                  description={item.description}
                />
              ))
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Index;
