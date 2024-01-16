import Buttons from "./components/Buttons";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  let [displayText, setDisplayText] = useState("");

  let onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setDisplayText("");
    } else if (buttonText === "=") {
      let result = eval(displayText);
      setDisplayText(result);
    } else {
      let newValue = displayText + buttonText;
      setDisplayText(newValue);
    }
  };

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
    "=",
    "00",
    "/",
  ];
  return (
    <div>
      <div className={`${styles.calculator}`}>
        <Display displayText={displayText}></Display>
        <Buttons
          onButtonClick={onButtonClick}
          buttonList={buttonList}
        ></Buttons>
      </div>
    </div>
  );
}

export default App;
