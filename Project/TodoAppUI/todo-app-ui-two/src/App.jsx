import { useState } from "react";
import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  let [tableItems, setTableItem] = useState([
    { name: "Go to market", date: "5/1/2024" },
    { name: "Go to college", date: "5/1/2024" },
    { name: "Go to dhaka", date: "5/1/2024" },
    { name: "Go to khagrachari", date: "5/1/2024" },
  ]);

  let userdata = "Your input data is : ";
  let inputdata = (event) => {
    console.log(event.target.value);
    userdata = event.target.value;
  };

  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      userdata = event.target.value;
      let newTableItem = event.target.value;
      let latestItem = [...tableItems, newTableItem];

      setTableItem(latestItem);
    }
  };
  return (
    <div>
      <TodoHeader></TodoHeader>
      <center>
        <p>{userdata}</p>
      </center>
      <InputData onKeyDown={onKeyDown}></InputData>
      <div classNameName="items-container">
        <TodoList tableItems={tableItems}></TodoList>
      </div>
    </div>
  );
}

export default App;
