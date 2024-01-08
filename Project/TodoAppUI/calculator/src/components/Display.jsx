import styles from "./Display.module.css";
let Display = () => {
  return (
    <div className={styles.display}>
      <input type="text" className={styles.displayText} />
    </div>
  );
};
export default Display;
