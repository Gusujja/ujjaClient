import React, { useState,useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./editVideo.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import CustomModal from "../../CustomModal/CustomModal";
import {  useParams } from "react-router-dom/dist";
import axios from 'axios'
import Select from "react-select";


const EditVideo = () => {
  const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
  const { Id } = useParams();
  const navigate = useNavigate();
  const [video,setVideo]=useState()
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [description, setDescription] = useState(video?.description || "");
  const [isModalVisible, setModalVisible] = useState(false);
const [msg,setMsg]=useState('')
  const [subcategories, setSubcategories] = useState([]);
  const [categories,setCategories]=useState([])


  
  useEffect(()=>{
    const fetchVideos = async () => {
    try {
      const response = await axios.post(`${web_Url}videos/${Id}`); // Replace with your backend URL
      setVideo(response.data);
    } catch (err) {
      // setError(err.message);
    } finally {
      // setLoading(false);
    }
  };
  fetchVideos();
  
  },[Id])
  useEffect(() => {
    if (video) {
      setDescription(video.description || "");
    }
  }, [video]);
  
  const formik = useFormik({
    initialValues: {
      title:  video?.title| "",
      smallDescription: video?.smallDescription| "",
      category: video?.category| "",
      subCategory: video?.subCategory| "",
      embedLink: video?.embedLink |"",
     // thumbnail: video?.thumbnail| null, // for image file input
      //description:video?.description | " ",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      smallDescription: Yup.string()
        .required("Required"),
        // .max(150, "Max 150 characters allowed"),
      category: Yup.string().required("Required"),
      // subCategory: Yup.string().required("Required"),
      subCategory: Yup.array().min(1, "Select at least one subcategory"),

      embedLink: Yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit: async (values) => {
      console.log("values",values)
      // const formData = new FormData();
      // // Append video metadata (title, small description, etc.)
      // formData.append("title", values.title);
      // formData.append("smallDescription", values.smallDescription);
      // formData.append("category", values.category);
      // formData.append("subCategory", values.subCategory);
      // formData.append("embedLink", values.embedLink);

      // // Append the description (as it comes from the ReactQuill editor)
      // formData.append("description", description);

      // Append the thumbnail file
      // if (values.thumbnail) {
      //   formData.append("thumbnail", values.thumbnail);
      // }
      const data={  title: values.title,
        smallDescription: values.smallDescription,
        category: values.category,
        subCategory: values.subCategory,
        embedLink: values.embedLink,
        // thumbnail: File,
        description:description}

      try {
        // Make the request to the backend
        const response = await axios.patch(`${web_Url}videos/${Id}` , {
         
          ...data, // Send the JSON strin
        });
        if (response.status === 200) {
         // alert("Video uploaded successfully!");
          // Reset the form or navigate as needed
          setModalVisible(true);
          setMsg("Video is uploaded")
          setTimeout(()=>{
            setModalVisible(false);
            formik.resetForm();
            setVideoPreview("");
            setDescription("");
            setMsg("")
            navigate("/videolist");
          },1000)
       
        } else {
          setModalVisible(true);
          setMsg("Bad Request!")
          setTimeout(()=>{
            setModalVisible(false);
            formik.resetForm();
            setVideoPreview("");
            setMsg("")
            setDescription("");
            navigate("/videolist");
          },1000)
        }
      } catch (error) {
        setModalVisible(true);
        setMsg("Bad Request!")
        setTimeout(()=>{
          setModalVisible(false);
          formik.resetForm();
          setVideoPreview("");
          setMsg("")
          setDescription("");
          navigate("/videolist");
        },1000);
      }
    },
    enableReinitialize: true, 
  });
  console.log("edit video",video,categories)
  useEffect(() => {
    if (video) {
      formik.setValues({
        title: video.title || "",
        smallDescription: video.smallDescription || "",
        category: video.category || "",
        subCategory: video.subCategory || "",
        embedLink: video.embedLink || "",
        // thumbnail: video.thumbnail || null,
      });
    }
  }, [video]);
  const handleEmbedLinkChange = (event) => {
    const { value } = event.target;
    formik.handleChange(event);
    setVideoPreview(value);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    formik.handleChange(event);
    const categoryObj = categories.find((cat) => cat.category === selectedCategory);
  //  const categoryObj1 = categories.find((cat) => cat.category === video.category);
      setSubcategories(categoryObj ? categoryObj.subcategories : []);
   
  };
  useEffect(() => {
    const fetchCategories = async () => {
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

    fetchCategories();
  }, []);

  // Handle image file selection and set preview
  // const handleThumbnailChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     formik.setFieldValue("thumbnail", file); // Set file to formik state
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setThumbnailPreview(reader.result); // Show preview using FileReader
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const getVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoPreview);

  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.content}>
          <h2>Edit Video</h2>
        
          <form onSubmit={formik.handleSubmit}
           className={styles.form}>
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Video Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className={styles.error}>{formik.errors.title}</div>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="smallDescription">Small Description</label>
                <input
                  id="smallDescription"
                  name="smallDescription"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.smallDescription}
                />
                {formik.touched.smallDescription &&
                formik.errors.smallDescription ? (
                  <div className={styles.error}>
                    {formik.errors.smallDescription}
                  </div>
                ) : null}
              </div>

              {/* Category and Subcategory Fields */}
              <div
                className={`${styles.formGroup} ${styles.categorySubcategory}`}
              >
                <div className={styles.formGroup}>
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    onChange={handleCategoryChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                  >
                    <option value="" label="Select category" />
                    {categories?.map((c, index) => (
                      <option key={index} value={c.category}>
                        {c.category}
                      </option>
                    ))}
                  </select>
                  {formik.touched.category && formik.errors.category ? (
                    <div className={styles.error}>{formik.errors.category}</div>
                  ) : null}
                </div>

                {/* <div className={styles.formGroup}>
                  <label htmlFor="subCategory">Subcategory</label>
                  <select
                    id="subCategory"
                    name="subCategory"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subCategory}
                    disabled={subcategories.length === 0}
                  >
                    <option value="" label="Select subcategory" />
                    {subcategories.map((subCategory, index) => (
                      <option key={index} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </select>
                  {formik.touched.subCategory && formik.errors.subCategory ? (
                    <div className={styles.error}>
                      {formik.errors.subCategory}
                    </div>
                  ) : null}
                </div> */}
                <div className={styles.formGroup}>
                  <label htmlFor="subCategory">Subcategory</label>

                  <Select 
                    id="subCategory"
                    name="subCategory"
                    isMulti
                    options={subcategories.map((sub) => ({
                      value: sub,
                      label: sub,
                    }))}
                    onChange={(selected) => {
                      const values = selected.map((option) => option.value);
                      formik.setFieldValue("subCategory", values);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.subCategory.map((value) => ({
                      value,
                      label: value,
                    }))}
                    className="reactSelectDropdown"
                  />

                  {formik.touched.subCategory && formik.errors.subCategory ? (
                    <div className={styles.error}>
                      {formik.errors.subCategory}
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Thumbnail Image Input */}
              {/* <div className={styles.formGroup}>
                <label htmlFor="thumbnail">Video Thumbnail</label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
              </div> */}

              <div className={styles.formGroup}>
                <label htmlFor="embedLink">Video Embed Link</label>
                <input
                  id="embedLink"
                  name="embedLink"
                  type="text"
                  onChange={handleEmbedLinkChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.embedLink}
                />
                {formik.touched.embedLink && formik.errors.embedLink ? (
                  <div className={styles.error}>{formik.errors.embedLink}</div>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="description">Description</label>
                <ReactQuill
                  value={description }
                  onChange={setDescription}
                  theme="snow"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ["bold", "italic", "underline"],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                />
              </div>

              <button type="submit" className={styles.submitButton} >
                Update Video
              </button>
            </div>
            <div className={styles.previews}>
              {/* Video Preview */}
              {videoId && (
                <div className={styles.preview}>
                  <p>Video Preview</p>
                  <iframe
                    width="240"
                    height="135"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Video Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* Thumbnail Preview */}
              {thumbnailPreview && (
                <div className={styles.preview}>
                  <p>Thumbnail Preview</p>
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    width="240"
                    height="135"
                  />
                </div>
              )}
            </div>


          </form>
        </div>

        <CustomModal
        isVisible={isModalVisible}
        title={msg}
      >
        {/* Custom content goes here */}
       
      </CustomModal>
      </div>
    </>
  );
};

export default EditVideo;
