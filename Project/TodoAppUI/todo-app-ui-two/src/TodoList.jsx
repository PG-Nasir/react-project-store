import styles from "./components/TodoList.module.css";
let TodoList = ({ tableItems }) => {
  let deleteItem = (item) => {
    console.log(`Go to deleted ${item.name}`);
  };

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
