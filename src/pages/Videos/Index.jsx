import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import SearchDropdown from "../../AdminPortal/VideosPages/VideoList/SearchDropdown/Index";
import SearchDropdownByNums from "../../AdminPortal/VideosPages/VideoList/SerachDropdownByNums/Index";
import { CgPlayButtonO } from "react-icons/cg";

const Videos = () => {
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
  const [loading,setLoading]=useState(false);

  // Fetch the videos from the backend when the component mounts or when the page/filter changes
  useEffect(() => {
    fetchVideos();
  }, [filter, currentPage, search, recordsPerPage]);

  // Pagination states

  //  Search dropdown

  const handleVideoSearch = (option) => {
    setsearch(option);
    console.log(`Selected option: ${option}`);
  };
  const handleVideoSearchByNums = (option) => {
    setRecordsPerPage(option);
    console.log(`Selected option: ${option}`);
  };

  const pages = 0;
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${web_Url}videos/search`, {
        params: {
          page: currentPage, // Adjust for zero-based index
          recordsPerPage: recordsPerPage, // Fetch 10 records per page
          sortOrder: search,
          category: filter.category,
          subCategory: filter.subCategory,
        },
      });

      setAllVideos(response.data.data); // Set videos
      setTotalPages(response.data.pages); // Set total pages
      setTotalRecords(response.data.totalRecords); // Set total records
    } catch (error) {
      console.error("Error fetching videos:", error);
    }finally{
      setLoading(false)
    }
  };

  const handlePageChange = (page) => {
    console.log("pages", pages);
    if (page >= 0 && page <= totalPages) {
      setCurrentPage(page); // Update current page
      fetchVideos(); // Fetch videos for the new page
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
     
      try {
        const response = await fetch(`${web_Url}category`); // Replace with your backend URL
        if (!response) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        console.log("categories data", data);
        setCategories(data);
        const categoryObj = categories.find(
          (cat) => cat.category === filter.category
        );
        setSubcategories(categoryObj ? categoryObj.subcategories : []);
      } catch (err) {
        console.log("error msg");
      }
    };

    fetchCategories();
  }, [filter.category]);

  // const handleMenuClick = (event, videoId) => {
  //   setMenuVisible(menuVisible === videoId ? null : videoId);
  // };

  const handleClose = () => {
    setMenuVisible(null);
  };

  const handleView = (videoId) => {
    navigate(`/videos/${videoId}`); // Navigate to the video detail page
    handleClose();
  };

  // const handleEdit = (videoId) => {
  //   navigate(`/editVideo/${videoId}`);
  //   handleClose();
  // };

  // const handleDelete = async (videoId) => {
  //   setModalVisible(true);
  //   setDeleteId(videoId);
  // };
  // const handleDeleteVideo = async () => {
  //   if (deleteId) {
  //     setModalVisible(false);
  //     try {
  //       const response = await axios.delete(`${web_Url}videos/${deleteId}`); // Replace with your backend URL
  //       if (response.status) {
  //         setIsDelete(true);
  //         setAllVideos(allVideos?.filter((item) => item._id !== deleteId))
  //         setTimeout(() => {
  //           setIsDelete(false);
  //         }, 1000);
  //       }
  //     } catch (err) {
  //       console.log("erro", err);
  //     }
  //   }
  // };

  const handleFilterChange = async (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* <CustomModal
        isVisible={isModalVisible}
        title="Are you sure you want to delete the Video?"
      >
        <div className="d-flex justify-content-between">
          <button
            className={styles.deleteButtons}
            onClick={() => setModalVisible(false)}
          >
            Cancel
          </button>
          <button className={styles.deleteButtons} onClick={handleDeleteVideo}>
            Yes
          </button>
        </div>
      </CustomModal> */}

      <div className={styles.pageLayout} style={{ marginTop: "4.3rem" }}>
       

        <div className={styles.content}>
          <div className={styles.filterContainer}>
            <div className={styles.heading}></div>
            <div className={styles.filterBox}>
              <div className={styles.category}>
                <div className={styles.dropdownContainer}>
                  <select
                    name="category"
                    className={styles.dropdown}
                    value={filter.category}
                    onChange={handleFilterChange}
                  >
                    <option value="">All Categories</option>
                    {categories?.map((c) => (
                      <option key={c.category} value={c.category}>
                        {c.category}
                      </option>
                    ))}
                  </select>
                </div>
                {filter.category && allVideos.length > 0 && (
                  <div className={styles.dropdownContainer}>
                    <select
                      name="subCategory"
                      className={styles.dropdown}
                      value={filter.subCategory}
                      onChange={handleFilterChange}
                    >
                      <option value="">All Subcategories</option>
                      {subcategories?.map((c, index) => (
                        <option key={index} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <SearchDropdownByNums onSelect={handleVideoSearchByNums} />
              <SearchDropdown onSelect={handleVideoSearch} />
            </div>
          </div>

          <div className={styles.videoGrid}>
            {loading ? <div>.....</div>:
            (allVideos.length > 0 ? (
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
            ))}
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

export default Videos;
