
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
        <option value="">Select</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Index;
