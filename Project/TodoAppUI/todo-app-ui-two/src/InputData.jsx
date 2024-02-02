import styles from "./components/TodoList.module.css";
function InputData(Probs) {
  /*let inputData = (event) => {
    let value = event.target.value;
    return console.log(value);
  };*/

  return (
    <div classNameName="container">
      <div classNameName={`${styles.kgRow} row`}>
        <div classNameName="col-4">
          <input
            type="text"
            placeholder="Enter text"
            onChange={Probs.inputdata}
            onKeyDown={Probs.onKeyDown}
          />
        </div>
        <div classNameName="col-4">
          <input type="date" />
        </div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName={`${styles.kgButton} btn btn-success`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputData;
