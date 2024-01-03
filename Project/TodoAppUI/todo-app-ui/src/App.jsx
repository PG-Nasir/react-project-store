import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList1 from "./TodoList1";
import TodoList2 from "./TodoList2";
import Clock from "./clock";
import MapMethod from "./MapMethod";

function App() {
  return (
    <div>
      <TodoHeader></TodoHeader>
      <InputData></InputData>
      <div class="items-container">
        <TodoList1></TodoList1>
        <TodoList2></TodoList2>
      </div>
      <Clock></Clock>
      <MapMethod></MapMethod>
    </div>
  );
}

export default App;
