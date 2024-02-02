import styles from "./components/TodoList.module.css";
import { MdDelete } from "react-icons/md";
let TodoList = ({ tableItems, deleteButtonHandler }) => {
  return (
    <>
      {tableItems.map((item) => (
        <div classNameName="container">
          <div classNameName={`${styles.kgRow} row`}>
            <div classNameName="col-4">{item.name}</div>
            <div classNameName="col-4">{item.date}</div>
            <div classNameName="col-2">
              <button
                type="button"
                classNameName={`${styles.kgButton} btn btn-danger`}
                onClick={() => deleteButtonHandler(item.name)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
