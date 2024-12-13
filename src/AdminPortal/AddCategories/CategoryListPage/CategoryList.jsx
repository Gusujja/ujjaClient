import React, { useState, useEffect } from "react";
import styles from "./CategoryList.module.css";
import { MdDelete, MdEdit, MdSaveAs, MdCancel } from "react-icons/md";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [updatedSubcategories, setUpdatedSubcategories] = useState("");

  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  // Fetch categories
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
        console.log("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${web_Url}category/${id}`);
      if (response.status) {
        setCategories(categories.filter((cat) => cat._id !== id));
      }
    } catch (err) {
      console.log("Error deleting category:", err);
    }
  };

  // Edit handler
  const handleEdit = (category) => {
    setEditingCategory(category._id);
    setUpdatedCategory(category.category);
    setUpdatedSubcategories(category.subcategories.join(","));
  };

  const handleSave = async () => {
    try {
      const updatedData = {
        category: updatedCategory,
        subCategory: updatedSubcategories.split(",").map((sub) => sub.trim()),
      };
      const response = await axios.patch(
        `${web_Url}category/${editingCategory}`,
        updatedData
      );
      console.log("resposne",response)
      if (response.status) {
        setCategories(
          categories.map((cat) =>
            cat._id === editingCategory
              ? { ...cat, ...response.data }
              : cat
          )
        );
        setEditingCategory(null);
      }
    } catch (err) {
      console.log("Error updating category:", err);
    }
  };

  return (
    <div className={styles.pageLayout}>
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
              categories.map((cat) =>
                editingCategory === cat._id ? (
                  <tr key={cat._id}>
                    <td>
                      <input
                        type="text"
                        value={updatedCategory}
                        onChange={(e) => setUpdatedCategory(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={updatedSubcategories}
                        onChange={(e) => setUpdatedSubcategories(e.target.value)}
                      />
                    </td>
                    <td>
                      <button
                        className={styles.saveButton}
                        onClick={handleSave}
                      >
                        Save <MdSaveAs style={{ marginBottom: "3px" }} />
                      </button>
                      <button
                        className={styles.cancelButton}
                        onClick={() => setEditingCategory(null)}
                      >
                        Cancel <MdCancel style={{ marginBottom: "3px" }} />
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={cat._id}>
                    <td>{cat.category}</td>
                    <td>{cat.subcategories.join(", ")}</td>
                    <td>
                      <button
                        className={styles.editButton}
                        onClick={() => handleEdit(cat)}
                      >
                        Edit <MdEdit style={{ marginBottom: "3px", marginLeft:"2px" }} />
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleDelete(cat._id)}
                      >
                        Delete <MdDelete style={{ marginBottom: "3px", marginLeft:"2px"}} />
                      </button>
                    </td>
                  </tr>
                )
              )
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
  );
};

export default CategoryList;
