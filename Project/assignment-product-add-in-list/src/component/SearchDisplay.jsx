import styles from "./SearchDisplay.module.css";
let SearchDisplay = (Probs) => {
  let searchItem = "";
  return (
    <div>
      <input
        type="text"
        onKeyDown={Probs.onKeyDown}
        className={`${styles.inputText}`}
        placeholder="Enter product name"
      />
      <p className={`${styles.inputPara}`}>You select : {searchItem}</p>
    </div>
  );
};
export default SearchDisplay;
