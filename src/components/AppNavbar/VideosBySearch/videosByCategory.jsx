import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { CgPlayButtonO } from "react-icons/cg";

const SearchByCategory = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [menuVisible, setMenuVisible] = useState(null);
  const [filter, setFilter] = useState({ category: "", subCategory: "" });
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [categories, setCategories] = useState([]); // You can fetch this dynamically
  const [allVideos, setAllVideos] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const [totalRecords, setTotalRecords] = useState(0); // Total records
  const [search, setsearch] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [subcategories, setSubcategories] = useState([]);


  const {category,subcategory}=useParams()
  console.log("subcategory",subcategory,category)
  // Fetch the videos from the backend when the component mounts or when the page/filter changes
  useEffect(() => {
    fetchVideos();
  }, [subcategory,category, currentPage, search, recordsPerPage]);

  
  const pages = 0;
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${web_Url}videos/search`, {
        params: {
          page: currentPage, // Adjust for zero-based index
          recordsPerPage: recordsPerPage, // Fetch 10 records per page
          sortOrder: search,
          category: category,
          subCategory:subcategory,
        },
      });

      setAllVideos(response.data.data); // Set videos
      setTotalPages(response.data.pages); // Set total pages
      setTotalRecords(response.data.totalRecords); // Set total records
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handlePageChange = (page) => {
    console.log("pages", pages);
    if (page >= 0 && page <= totalPages) {
      setCurrentPage(page); // Update current page
      fetchVideos(); // Fetch videos for the new page
    }
  };

 
  const handleClose = () => {
    setMenuVisible(null);
  };

  const handleView = (videoId) => {
    navigate(`/videos/${videoId}`); // Navigate to the video detail page
    handleClose();
  };

 

  return (
    <>
      

      <div className={styles.pageLayout} style={{ marginTop: "150px" }}>
       

        <div className={styles.content}>

          <div className={styles.videoGrid}>
            {allVideos.length > 0 ? (
              allVideos?.map((video) => (
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
                    <div className={styles.actions}>
                      <div onClick={() => handleView(video._id)}>
                        <CgPlayButtonO /> Play
                      </div>
                      {/* <div onClick={() => handleEdit(video._id)}>
                        <FiEdit /> Edit
                      </div>
                      <div onClick={() => handleDelete(video._id)}>
                        <FiTrash /> Delete
                      </div> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No videos available</p>
            )}
          </div>

          {/* Pagination controls */}
          <div className={styles.pagination} style={{ marginTop: "20px" }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage <= 1} // Disable Previous button on first page
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage >= totalPages} // Disable Next button on last page
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByCategory;
