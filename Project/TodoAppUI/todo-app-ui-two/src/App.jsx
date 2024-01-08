import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  let tableItems = [
    { name: "Go to market", date: "5/1/2024" },
    { name: "Go to college", date: "5/1/2024" },
    { name: "Go to dhaka", date: "5/1/2024" },
  ];

  let inputdata = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <TodoHeader></TodoHeader>
      <InputData inputdata={inputdata}></InputData>
      <div className="items-container">
        <TodoList tableItems={tableItems}></TodoList>
      </div>
    </div>
  );
}

export default App;
