import React, { useState } from "react";
import styles from "./MembershipModal.module.css";

const MembershipModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open popup */}
      <button onClick={togglePopup} className={styles.openButton}>
       SEE MEMBERSHIPS
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button onClick={togglePopup} className={styles.closeButton}>
              &times;
            </button>
            <iframe
              src="https://bmjja.kicksite.net/bizbuilders/landing_pages/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGRwZ18yMDAwNSJ9.MexZME6CjIVGZdVFkvF5Gy4dt1i1kG4-H-xqbizV9qA"
              width="100%"
              height="300"
              title="Memberships"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembershipModal;