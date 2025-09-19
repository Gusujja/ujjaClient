import React from "react";
import "./ContactModal.css";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null; // render nothing if closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
         <div>
      <iframe
            src="https://bmjja.kicksite.net/bizbuilders/lead_capture_forms/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGNmXzEwMDI3In0.LYndfpGxr4OpEmk3_M0wWIWAWS27R9CTVivQ8ye_a9o"
            width="600"
            height="465"
            loading="lazy"
            title="Lead Form"
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default ContactModal;
