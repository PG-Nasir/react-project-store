import styles from "./Display.module.css";
let Display = ({ displayText }) => {
  return (
    <div className={styles.display}>
      <input
        type="text"
        className={styles.displayText}
        readOnly
        value={displayText}
      />
    </div>
  );
};
export default Display;
