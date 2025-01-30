import React, { useState, useEffect } from "react";

import { Table, Button, message, Popconfirm } from "antd";

import axios from "axios";
import "antd/dist/reset.css";
import styles from "./LeadsDone.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";

const LeadsDone = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Used for navigation to a detailed lead page if needed
  const {category}=useParams()

  useEffect(() => {
    const fetchContactData = async () => {
      try {
      
        const response = await axios.get(`${web_Url}forms/${category}/true`);
        if (!response) {
          throw new Error("Failed to fetch categories");
        }
        setData(response.data);
      } catch (err) {
        console.log("Error fetching categories:", err);
      }
    };

    fetchContactData();
  }, [category]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${web_Url}forms/${category}/${id}`);
      message.success("Lead deleted successfully!");
      setData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting lead:", error);
      message.error("Failed to delete the lead. Please try again.");
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phoneNumber",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Birth Date",
      dataIndex: "birthdate",
      key: "birthDate",
      render: (date) => new Date(date).toLocaleDateString("en-GB"),
    },
    {
      title: "Date",
      dataIndex: "dateSubmitted",
      key: "date",
      render: (date) => new Date(date).toLocaleDateString("en-GB"),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <div className={styles.actionButtons}>
          {/* <button
            onClick={() => navigate(`/leadsdetail/${record._id}`)} // Navigate to the Lead Detail page
            className={styles.viewButton}
          >
            View Details
          </button> */}
          <Popconfirm
            title="Are you sure you want to delete this lead?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger >
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <h6 className={styles.title}>Leads Done</h6>
          <div className={styles.tableContainer}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10 }}
              bordered
              className={styles.customTable}
              rowKey="_id"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default LeadsDone;
