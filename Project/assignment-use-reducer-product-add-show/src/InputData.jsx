import { useContext, useState } from "react";
import styles from "./components/TodoList.module.css";
import { IoAddCircleSharp } from "react-icons/io5";
import { TodoItemsContext } from "./components/store/todo-item-context";
function InputData() {
  let { addNewItem } = useContext(TodoItemsContext);
  let [name, setName] = useState("");
  let [date, setDate] = useState("");

  let setNameData = (event) => {
    setName(event.target.value);
  };

  let setDateData = (event) => {
    setDate(event.target.value);
  };

  let handleAddButton = (event) => {
    console.log(event);
    event.preventDefault();
    addNewItem(name, date);
    setName("");
    setDate("");
  };

  return (
    <div classNameName="container">
      <form classNameName={`${styles.kgRow} row`} onSubmit={handleAddButton}>
        <div classNameName="col-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setNameData(event)}
            placeholder="Enter text"
          />
        </div>
        <div classNameName="col-4">
          <input
            type="date"
            value={date}
            onChange={(event) => setDateData(event)}
          />
        </div>
        <div classNameName="col-2">
          <button
            type="submit"
            classNameName={`${styles.kgButton} btn btn-success`}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputData;
