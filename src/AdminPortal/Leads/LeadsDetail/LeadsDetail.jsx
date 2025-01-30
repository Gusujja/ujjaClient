import React, { useState, useEffect } from "react";
import { Table, Button, message, Popconfirm, Modal, Input } from "antd";
import "antd/dist/reset.css";
import styles from "./LeadsDetail.module.css";
import Sidebar from "../../Sidebar/Sidebar";
import Navbar from "../../Navbar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LeadsMain from "../LeadsMain";

const LeadsDetail = () => {
  const web_Url =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_DEVELOPMENT_URL;

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLead, setCurrentLeadId] = useState("");
  const [notes, setNote] = useState("");
  const [calledLeads, setCalledLeads] = useState(false); // To track called leads

  const navigate = useNavigate(); // Used for navigation to the new "Done" page

  const { category } = useParams();

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get(`${web_Url}forms/${category}/false`);
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

  const handleNotesClick = (record) => {
    setCurrentLeadId(record._id);
    setNote(record.note || "");
    setIsModalOpen(true);
  };

  const handleSaveNote = async () => {
    if (!currentLead) return;

    try {
      const update = { note: notes };
      const updatedLead = await axios.post(
        `${web_Url}forms/${category}/${currentLead}`,
        update
      );

      setData((prevData) =>
        prevData.map((item) =>
          item._id === currentLead
            ? { ...item, note: updatedLead.data.note }
            : item
        )
      );

      message.success("Note saved successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving note:", error);
      message.error("Failed to save the note. Please try again.");
    }
  };

  const handleCalledClick = async (id, currentStatus) => {
    try {
      const update = { called: !currentStatus }; // Toggle the current status
      const updatedLead = await axios.post(
        `${web_Url}forms/${category}/${id}`,
        update
      );

      setData((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, called: updatedLead.data.called } : item
        )
      );

      message.success("Lead status updated!");
    } catch (error) {
      message.error("Failed to update lead status");
    }
  };

  const handleDoneClick = async (id) => {
    // Navigate to the "Done" page with the lead details (or move to another page)
    const update = { done: true };
    await axios.post(`${web_Url}forms/${category}/${id}`, update);
    // navigate(`/done/${id}`);
    navigate(`/leadsdone/${category}`);

    // Remove lead from the current list
  };

  const handleLeadsDone = () => {
    navigate(`/leadsdone/${category}`);
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
      dataIndex: "dateSubmitted", // Assuming the backend provides a 'date' field
      key: "date",
      render: (date) => new Date(date).toLocaleDateString("en-GB"),
    },

    {
      title: "Notes",
      key: "notes",
      render: (_, record) => (
        <Button
          type="default"
          className={styles.notesButton}
          onClick={() => handleNotesClick(record)}
        >
          {record.note
            ? record.note.substring(0, 20) + "..."
            : "Add/Edit Notes"}
        </Button>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <div className={styles.actionButtons}>
          <Button
            onClick={() => handleCalledClick(record._id, record.called)}
            style={{
              backgroundColor: record.called ? "#405f74" : "", // Highlight if called
              color: record.called ? "white" : "black",
            }}
            className={styles.customCalledButton}
          >
            {record.called ? "Called" : "Called"}
          </Button>

          <Button
            onClick={() => handleDoneClick(record._id)}
            className={styles.doneButton}
          >
            Done
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this lead?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
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
        <div className={styles.mainContainer}>
        <LeadsMain />

        <main className={styles.mainContent}>
          <div className={styles.header}>
            <h6 className={styles.title}> {category} Leads Details</h6>
            <button style={{ marginBottom: "22px" }} onClick={handleLeadsDone}>
              {" "}
              {category} Leads Done
            </button>
          </div>
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
        </main></div>
      </div>

      {/* Modal for Notes */}
      <Modal
        title="Add/Edit Notes"
        open={isModalOpen}
        onOk={() => handleSaveNote()}
        onCancel={() => setIsModalOpen(false)}
        okText="Save"
        cancelText="Cancel"
        okButtonProps={{
          className: styles.customSaveButton, // Apply custom class
        }}
      >
        <Input.TextArea
          rows={4}
          value={notes}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter notes here..."
        />
      </Modal>
    </>
  );
};

export default LeadsDetail;
