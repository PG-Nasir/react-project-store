import styles from "./SearchDisplay.module.css";
let SearchDisplay = (Probs) => {
  let searchItem = "";
  return (
    <div>
      <input
        type="text"
        onKeyDown={Probs.onKeyDown}
        classNameName={`${styles.inputText}`}
        placeholder="Enter product name"
      />
      <p classNameName={`${styles.inputPara}`}>You select : {searchItem}</p>
    </div>
  );
};
export default SearchDisplay;
