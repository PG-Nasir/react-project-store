import "./App.css";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoItemContextProvider from "./components/store/todo-item-context";

function App() {
  let userdata = "Your input data is : ";

  return (
    <div>
      <TodoItemContextProvider>
        <TodoHeader></TodoHeader>
        <center>
          <p>{userdata}</p>
        </center>
        <InputData></InputData>
        <div className="items-container">
          <TodoList></TodoList>
        </div>
      </TodoItemContextProvider>
    </div>
  );
}

export default App;
