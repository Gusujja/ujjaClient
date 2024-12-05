import React, { useState, useEffect } from "react";
import { FiEye, FiEdit, FiTrash } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import styles from "./VideoList.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import CustomModal from "../../CustomModal/CustomModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const VideoList = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [menuVisible, setMenuVisible] = useState(null);
  const [filter, setFilter] = useState({ category: "", subCategory: "" });
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [categories, setCategories] = useState([]); // You can fetch this dynamically
  const [allVideos, setAllVideos] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Total pages
  const [totalRecords, setTotalRecords] = useState(0); // Total records

const [subcategories,setSubcategories]=useState([])
    // // Fetch the videos from the backend when the component mounts
    // useEffect(() => {
    //   const fetchVideos = async () => {
    //     try {
    //       const response = await fetch(`${web_Url}videos`,{
    //         params: {
    //           page: currentPage - 1, // Adjust for zero-based index
    //           recordsPerPage: 10, // Fetch 10 records per page
    //         }
    //       }); // Replace with your backend URL
    //       if (!response.ok) {
    //         throw new Error("Failed to fetch videos");
    //       }
    //       const data = await response.json();
    //       setAllVideos(data.videos);
    //       console.log("resposne of videos",response,data)
    //       setTotalPages(response.data.totalPages ); // Set total pages
    //       setTotalRecords(response.data.totalRecords); // Set total records
    //     } catch (err) {
    //       console.log("erro",err)
    //     }
    //   };
  
    //   fetchVideos();
    // }, []);
  


  // Fetch the videos from the backend when the component mounts or when the page/filter changes
  useEffect(() => {
    fetchVideos();
  }, [filter, currentPage]);

   // Pagination states

 const pages=0;
   const fetchVideos = async () => {
     try {
       const response = await axios.get(`${web_Url}videos/search`, {
         params: {
           page: currentPage, // Adjust for zero-based index
           recordsPerPage: 10, // Fetch 10 records per page
           category: filter.category,
           subCategory: filter.subCategory,
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
    console.log("pages",pages)
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
          console.log("categories data",data)
          setCategories(data);
          const categoryObj = categories.find(
            (cat) => cat.category === filter.category
          );
          setSubcategories(categoryObj ? categoryObj.subcategories : []);
  

        } catch (err) {
       console.log("error msg")
        }
      };
  
      fetchCategories();
    }, [filter.category]);
    
  
    const handleMenuClick = (event, videoId) => {
      setMenuVisible(menuVisible === videoId ? null : videoId);
    };
  
    const handleClose = () => {
      setMenuVisible(null);
    };
  
    const handleView = (videoId) => {
      navigate(`/videos/${videoId}`); // Navigate to the video detail page
      handleClose();
    };
  
    const handleEdit = (videoId) => {
      navigate(`/editVideo/${videoId}`);
      handleClose();
    };
  
    const handleDelete = async (videoId) => {
      setModalVisible(true);
      setDeleteId(videoId);
    };
    const handleDeleteVideo = async () => {
      if (deleteId) {
        setModalVisible(false);
        try {
          const response = await axios.delete(`${web_Url}videos/${deleteId}`); // Replace with your backend URL
          if (response.status) {
            setIsDelete(true);
            //setAllVideos(allVideos?.filter((item) => item._id !== deleteId)) 
            setTimeout(() => {
              setIsDelete(false);
            }, 1000);
          }
        } catch (err) {
        console.log("erro",err)
        } 
      }
    };
  
  
    console.log("filter category",subcategories)
  

  const handleFilterChange = async (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

// // Handle drag-and-drop
// const onDragEnd = async (result) => {
//   const { source, destination } = result;

//   // If dropped outside a valid destination, do nothing
//   if (!destination) return;

//   // If dropped in the same position, do nothing
//   if (source.index === destination.index) return;

//   // Reorder the array locally
//   const updatedVideos = Array.from(allVideos);
//   const [movedVideo] = updatedVideos.splice(source.index, 1);
//   updatedVideos.splice(destination.index, 0, movedVideo);

//   setAllVideos(updatedVideos);

//   // Update the order in the backend
//   try {
//     await axios.post(`${web_Url}videos/reorder`, {
//       updatedOrder: updatedVideos.map((video, index) => ({
//         id: video._id,
//         position: index,
//       })),
//     });
//   } catch (error) {
//     console.error("Error updating video order:", error);
//   }
// };


  return (
    <>
    <CustomModal isVisible={isModalVisible} title="Are you sure you want to delete the Video?">
      <div className="d-flex justify-content-between">
        <button className={styles.deleteButtons} onClick={() => setModalVisible(false)}>
          Cancel
        </button>
        <button className={styles.deleteButtons} onClick={handleDeleteVideo}>
          Yes
        </button>
      </div>
    </CustomModal>

    <Navbar />
    <div className={styles.pageLayout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <div className={styles.filterContainer}>
          <h2>Uploaded Videos List</h2>
          <div className={styles.filterBox}>
            <select
              name="category"
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

            {filter.category && (
              <select
                name="subCategory"
                value={filter.subCategory}
                onChange={handleFilterChange}
              >
                <option value="">All Subcategories</option>
                {subcategories?.map((c,index) => (
                    <option key={index} value={c}>
                    {c}
                  </option>
                
               
              ))}
                {/* Render subcategories dynamically */}
              </select>
            )}
          </div>
          {/* <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="videoList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={styles.videoGrid}
            >
              {allVideos.map((video, index) => (
                <Draggable key={video._id} draggableId={video._id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={styles.videoCard}
                    >
                      <iframe
                        src={video.embedLink}
                        frameBorder="0"
                        allowFullScreen
                        title={video.title}
                        className={styles.iframe}
                      ></iframe>
                      <div className={styles.videoInfo}>
                        <h6>{video.title}</h6>
                        <p>{video.smallDescription}</p>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext> */}
        </div>

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
                  <h6>{video.title.slice(0,35)+'...'}</h6>
                  <p>{video.smallDescription.slice(0,40)+'...'}</p>
                  <div className={styles.actions}>
                    <div onClick={() => handleView(video._id)}>
                      <FiEye /> View
                    </div>
                    <div onClick={() => handleEdit(video._id)}>
                      <FiEdit /> Edit
                    </div>
                    <div onClick={() => handleDelete(video._id)}>
                      <FiTrash /> Delete
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>

        {/* Pagination controls */}
        <div className={styles.pagination} style={{marginTop:"20px"}}>
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

export default VideoList;
