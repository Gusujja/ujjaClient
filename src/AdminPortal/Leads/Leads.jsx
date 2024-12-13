import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leads.module.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


const Leads = () => {
  const navigate = useNavigate();

  const categories = [
    { label: "Female", route: "females" },
    { label: "Kids", route: "kids" },
    { label: "Over 40", route: "over40" },
    { label: "Beginners", route: "beginners" },
    { label: "Teenagers", route: "teenagers" },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.pageLayout}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <div className={styles.leadsContainer}>
            {categories.map((category) => (
              <div
                key={category.route}
                className={styles.card}
                onClick={() => navigate(`/leads/${category.route}`)}
              >
                <h6>{category.label}</h6>
              </div>
            ))}
          </div>
        
        </main>
      </div>
    </>
  );
};

export default Leads;
