import styles from "./Display.module.css";
let Display = ({ displayText }) => {
  return (
    <div classNameName={styles.display}>
      <input
        type="text"
        classNameName={styles.displayText}
        readOnly
        value={displayText}
      />
    </div>
  );
};
export default Display;
