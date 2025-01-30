import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leads.module.css";


function LeadsMain() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState(0);
    
  
  
    
    // Categories definition
    const categories = [
      { label: "Female", route: "females" },
      { label: "Kids", route: "kids" },
      { label: "Over 40", route: "over40" },
      { label: "Beginners", route: "beginners" },
      { label: "Teenagers", route: "teenagers" },
    ];
  
    // Fetch notification counts on mount
    useEffect(() => {
      const fetchNotifications = async () => {
        try {
          const response = await fetch("/api/leads/notifications");
          const data = await response.json();
          setNotifications(6);
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      };
  
      fetchNotifications();
    }, []);
  
    // Reset notification count on category click
    const handleCategoryClick = (category) => {
      setNotifications(prevState => ({
        ...prevState,
        [category]: 0,
      }));
      navigate(`/leads/${category}`);
    };

    
  return (
    <div>
     
    
        <main className={styles.mainContent}>
          <div className={styles.leadsContainer}>
            {categories.map((category) => (
              <div
                key={category.route}
                className={styles.card}
                onClick={() => handleCategoryClick(category.route)}
              >
                <h6>{category.label}</h6>
                {/* Show notification badge if count is greater than 0 */}
                {notifications[category.route] > 0 && (
                  <div className={styles.notificationBadge}>
                    {notifications[category.route]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
  
  )
}

export default LeadsMain
