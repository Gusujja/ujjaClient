// import React, { useState } from "react";
// import styles from "./AddCategory.module.css";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../Navbar/Navbar";
// import Sidebar from "../../Sidebar/Sidebar";
// import axios from "axios"
// import CustomModal from "../../CustomModal/CustomModal";

// const AddCategory = () => {
//   const web_Url =
//   process.env.NODE_ENV === "production"
//     ? process.env.REACT_APP_PRODUCTION_URL
//     : process.env.REACT_APP_DEVELOPMENT_URL;
//   const [category, setCategory] = useState("");
//   const [categories, setCategories] = useState([ ]);
//   const [subCategory, setSubCategory] = useState("");
//   const navigate = useNavigate();
//   const [description, setDescription] = useState("");
//   const [isModalVisible, setModalVisible] = useState(false);
// const [msg,setMsg]=useState('')
// useEffect(() => {
//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(`${web_Url}category`); // Replace with your backend URL
//       if (!response) {
//         throw new Error("Failed to fetch videos");
//       }
//       const data = await response.json();
//       setCategories(data);
//     } catch (err) {
//    console.log("error msg")
//     }
//   };

//   fetchCategories();
// }, []);

//   const handleAddCategory = async (event) => {
//   event.preventDefault();
//   try {
//     const data={
//       category,
//       subCategory
//     }
//     // Make the request to the backend
//     const response = await axios.post(`${web_Url}category`, {
//       method: "POST",
//   ...data
//     });
//     if (response.status === 201) {
//      // alert("Video uploaded successfully!");
//       // Reset the form or navigate as needed
//       setModalVisible(true);
//       setMsg("Category is uploaded")
//       setTimeout(()=>{
//         setModalVisible(false);
//         setDescription("");
//         setMsg("")
//         navigate("/uploadvideo");
//       },1000)
   
//     }
//   } catch (error) {
//     setModalVisible(true);
//     setMsg("Bad Request!")
//     setTimeout(()=>{
    
//     },1000);
//   }
//   };
  
//  const handleCategoryList =() => {
//   navigate("/categorylist");
//  }
//   return (
//     <>
//       <CustomModal
//         isVisible={isModalVisible}
//         title={msg}
//       >
//         {/* Custom content goes here */}
        
//       </CustomModal>
//       <Navbar />
//       <div className={styles.pageLayout}>
//         <div className={styles.sidebar}>
//           <Sidebar />
//         </div>

//         <div className={styles.container}>
//           <div className={styles.header}>
//             <h2>Add Category and Subcategory</h2>
//             <button onClick={handleCategoryList} className={styles.categorylist}>
//               Browse Category List
//             </button>
//           </div>
//           <form onSubmit={handleAddCategory} className={styles.form}>
//             <div className={styles.formGroup}>
//               <label htmlFor="category">Category</label>
//               <input
//                 id="category"
//                 type="text"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 placeholder="Enter new category"
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="subCategory">Subcategory</label>
//               <input
//                 id="subCategory"
//                 type="text"
//                 value={subCategory}
//                 onChange={(e) => setSubCategory(e.target.value)}
//                 placeholder="Enter subcategory"
//               />
//             </div>
//             <button type="submit" className={styles.addButton}>
//               Add Category
//             </button>
//           </form>
        
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddCategory;

import React, { useState, useEffect } from "react";
import styles from "./AddCategory.module.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";
import CustomModal from "../../CustomModal/CustomModal";

const AddCategory = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${web_Url}category`);
        if (!response) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [web_Url]);

  const handleAddCategory = async (event) => {
    event.preventDefault();
    try {
      const data = {
        category: newCategory || category,
        subCategory: newSubCategory || subCategory,
      };

      const response = await axios.post(`${web_Url}category`, data);
      if (response.status === 201) {
        setModalVisible(true);
        setMsg("Category is uploaded");
        setTimeout(() => {
          setModalVisible(false);
          setDescription("");
          setMsg("");
          navigate("/uploadvideo");
        }, 1000);
      }
    } catch (error) {
      setModalVisible(true);
      setMsg("Bad Request!");
      setTimeout(() => {
        setModalVisible(false);
        setMsg("");
      }, 1000);
    }
  };

  const handleCategoryList = () => {
    navigate("/categorylist");
  };

  return (
    <>
      <CustomModal isVisible={isModalVisible} title={msg} />
      <Navbar />
      <div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Add Category and Subcategory</h2>
            <button
              onClick={handleCategoryList}
              className={styles.categorylist}
            >
              Browse Category List
            </button>
          </div>
          <form onSubmit={handleAddCategory} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select an existing category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Or enter a new category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onBlur={() => {
                  if (newCategory) setCategory(newCategory);
                }}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subCategory">Subcategory</label>
              <input
                type="text"
                placeholder="Enter subcategory"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="Or enter a new subcategory"
                value={newSubCategory}
                onChange={(e) => setNewSubCategory(e.target.value)}
                onBlur={() => {
                  if (newSubCategory) setSubCategory(newSubCategory);
                }}
              />
            </div>
            <button type="submit" className={styles.addButton}>
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
