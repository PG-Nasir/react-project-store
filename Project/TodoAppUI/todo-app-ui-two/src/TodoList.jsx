import styles from "./components/TodoList.module.css";
let TodoList = ({ tableItems }) => {
  let deleteItem = (item) => {
    console.log(`Go to deleted ${item.name}`);
  };

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
                onClick={() => deleteItem(item)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
