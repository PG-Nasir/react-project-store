import styles from "./components/TodoList.module.css";
import { MdDelete } from "react-icons/md";
let TodoList = ({ tableItems, deleteButtonHandler }) => {
  return (
    <>
      {tableItems.map((item) => (
        <div className="container">
          <div className={`${styles.kgRow} row`}>
            <div className="col-4">{item.name}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button
                type="button"
                className={`${styles.kgButton} btn btn-danger`}
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
