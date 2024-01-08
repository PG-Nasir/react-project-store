import styles from "./components/TodoList.module.css";
function InputData(Probs) {
  /*let inputData = (event) => {
    let value = event.target.value;
    return console.log(value);
  };*/

  return (
    <div className="container">
      <div className={`${styles.kgRow} row`}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter text"
            onChange={Probs.inputdata}
          />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles.kgButton} btn btn-success`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputData;
