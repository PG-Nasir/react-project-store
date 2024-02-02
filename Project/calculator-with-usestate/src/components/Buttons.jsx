import styles from "./Buttons.module.css";
let Buttons = ({ buttonList, onButtonClick }) => {
  return (
    <div classNameName={styles.buttons}>
      {buttonList.map((item) => (
        <button
          onClick={() => onButtonClick(item)}
          classNameName={styles.buttonSize}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
