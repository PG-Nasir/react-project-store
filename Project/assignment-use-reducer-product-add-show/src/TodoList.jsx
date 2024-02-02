import { useContext } from "react";
import styles from "./components/TodoList.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "./components/store/todo-item-context";
let TodoList = () => {
  const { tableItems, deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      {tableItems.map((item) => (
        <div classNameName="container" key={item.name}>
          <div classNameName={`${styles.kgRow} row`}>
            <div classNameName="col-4">{item.name}</div>
            <div classNameName="col-4">{item.date}</div>
            <div classNameName="col-2">
              <button
                type="button"
                classNameName={`${styles.kgButton} btn btn-danger`}
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
