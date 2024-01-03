import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList1 from "./TodoList1";
import TodoList2 from "./TodoList2";

function App() {
  return (
    <div>
      <TodoHeader></TodoHeader>
      <InputData></InputData>
      <div class="items-container">
        <TodoList1></TodoList1>
        <TodoList2></TodoList2>
      </div>
    </div>
  );
}

export default App;
