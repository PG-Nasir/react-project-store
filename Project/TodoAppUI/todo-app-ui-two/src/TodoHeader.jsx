import styles from "./components/Heading.module.css";
function TodoHeader() {
  return (
    <center>
      <h1 className={styles.headingText}>Todo App</h1>
    </center>
  );
}

export default TodoHeader;
