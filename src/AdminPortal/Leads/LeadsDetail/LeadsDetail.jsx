import React, { useState, useEffect } from "react";
import { Table, Button, message, Popconfirm } from "antd";
import "antd/dist/reset.css"; // Ant Design reset styles
import styles from "./LeadsDetail.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const LeadsDetail = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [data, setData] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`${web_Url}forms/${category}`);
        if (!response) {
          throw new Error("Failed to fetch categories");
        }

        console.log("response is", response);
        setData(response.data);
      } catch (err) {
        console.log("Error fetching categories:", err);
      }
    };

    fetchContactData();
  }, [category]);

  // Function to handle deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${web_Url}forms/${category}/${id}`);
      message.success("Lead deleted successfully!");
      // Update state to remove deleted item
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
      title: "Action",
      key: "action",
      render: (_, record) => {
        console.log(record);
        return (
          <Popconfirm
            title="Are you sure you want to delete this lead?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>
              Delete
            </Button>
          </Popconfirm>
        );
      },
    }
    
  ];

  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <h6 className={styles.title}>Leads Details</h6>
          <div className={styles.tableContainer}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10 }}
              bordered
              className={styles.customTable}
              rowKey="id" // Ensure each row has a unique key
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default LeadsDetail;
