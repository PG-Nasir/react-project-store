import { useState } from "react";
import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  let defaultItems = [];

  let [tableItems, setTableItem] = useState(defaultItems);

  let userdata = "Your input data is : ";
  let inputdata = (name, date) => {
    let newItems = { name: name, date: date };
    let latestItems = [...tableItems, newItems];
    setTableItem(latestItems);
  };

  let deleteButtonHandler = (dataName) => {
    console.log(dataName);
    const newItems = tableItems.filter((item) => item.name !== dataName);
    setTableItem(newItems);
  };
  return (
    <div>
      <TodoHeader></TodoHeader>
      <center>
        <p>{userdata}</p>
      </center>
      <InputData inputdata={inputdata}></InputData>
      <div className="items-container">
        <TodoList
          deleteButtonHandler={deleteButtonHandler}
          tableItems={tableItems}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
