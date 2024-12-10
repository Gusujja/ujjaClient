
import styles from "./styles.module.css";

const Index= ({ onSelect }) => {
  const handleSelect = (e) => {
    if (onSelect) {
      onSelect(e.target.value);
    }
  };

  return (
    <div className={styles.dropdownContainer}>
      {/* <label htmlFor="videoSearch" className={styles.label}>
        Search Videos
      </label> */}
      <select id="videoSearch" className={styles.dropdown} onChange={handleSelect}>
        <option value="">Recently Uploaded</option>
        <option value="recent">Recent Videos</option>
        <option value="old">Old Videos</option>
      </select>
    </div>
  );
};

export default Index;
