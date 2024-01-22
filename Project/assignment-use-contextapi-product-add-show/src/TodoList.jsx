import { useContext } from "react";
import styles from "./components/TodoList.module.css";
import { MdDelete } from "react-icons/md";
import TodoItemsContext from "./components/store/todo-item-context";
let TodoList = () => {
  const { tableItems, deleteItem } = useContext(TodoItemsContext);
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
                onClick={() => deleteItem(item.name)}
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
