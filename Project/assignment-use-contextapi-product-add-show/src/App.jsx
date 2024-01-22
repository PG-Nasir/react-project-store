import { useState } from "react";
import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoItemsContext from "./components/store/todo-item-context";
function App() {
  let defaultItems = [];

  let [tableItems, setTableItem] = useState(defaultItems);

  let userdata = "Your input data is : ";
  let addNewItem = (name, date) => {
    let newItems = { name: name, date: date };
    let latestItems = [...tableItems, newItems];
    setTableItem(latestItems);
  };

  let deleteItem = (dataName) => {
    console.log(dataName);
    const newItems = tableItems.filter((item) => item.name !== dataName);
    setTableItem(newItems);
  };

  return (
    <div>
      <TodoItemsContext.Provider
        value={{
          tableItems,
          deleteItem,
          addNewItem,
        }}
      >
        <TodoHeader></TodoHeader>
        <center>
          <p>{userdata}</p>
        </center>
        <InputData></InputData>
        <div className="items-container">
          <TodoList></TodoList>
        </div>
      </TodoItemsContext.Provider>
    </div>
  );
}

export default App;
