
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
        <option value="ten">10</option>
        <option value="twenty">20</option>
        <option value="fifty">50</option>
        <option value="hundred">100</option>
      </select>
    </div>
  );
};

export default Index;
