import React, { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { MdDelete } from "react-icons/md";
import axios from 'axios'


const CategoryList = () => {
  // Example initial data (could be replaced with API data)
  const [categories, setCategories] = useState([ ]);
  const web_Url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_DEVELOPMENT_URL;
  // Delete handler
  
console.log("process.env.REACT_APP_DEVELOPMENT_URL",process.env.REACT_APP_DEVELOPMENT_URL,process.env.NODE_ENV,process.env)
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${web_Url}category/${id}`
      ); // Replace with your backend URL
      if (response.status) {
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
    console.log("error msg")
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
        setCategories(data);
      } catch (err) {
     console.log("error msg")
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
<Navbar/>
<div className={styles.pageLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      <div className={styles.container}>
        <h2>Category List</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.category}</td>
                  <td>{cat.subcategories.join(',')}</td>
                  <td>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(cat._id)}
                    >
                      Delete <MdDelete style={{marginBottom:"3px"}} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={styles.noData}>
                  No categories available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default CategoryList;
