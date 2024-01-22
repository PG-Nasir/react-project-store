import { useRef } from "react";
import styles from "./components/TodoList.module.css";
import { IoAddCircleSharp } from "react-icons/io5";

function InputData({ inputdata }) {
  const nameData = useRef();
  const dateData = useRef();

  let handleAddButton = (event) => {
    console.log(event);
    event.preventDefault();
    let nameValue = nameData.current.value;
    let dateValue = dateData.current.value;
    inputdata(nameValue, dateValue);
    nameData.current.value = "";
    dateData.current.value = "";
  };

  return (
    <div className="container">
      <form className={`${styles.kgRow} row`} onSubmit={handleAddButton}>
        <div className="col-4">
          <input type="text" ref={nameData} placeholder="Enter text" />
        </div>
        <div className="col-4">
          <input type="date" ref={dateData} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`${styles.kgButton} btn btn-success`}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputData;
