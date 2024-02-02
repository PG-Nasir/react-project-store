import Buttons from "./components/Buttons";
import Display from "./components/Display";
import styles from "./App.module.css";
function App() {
  let buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "CE",
    "00",
    "/",
  ];
  return (
    <div>
      <div classNameName={`${styles.calculator}`}>
        <Display></Display>
        <Buttons buttonList={buttonList}></Buttons>
      </div>
    </div>
  );
}

export default App;
