import styles from "./Buttons.module.css";
let Buttons = ({ buttonList, onButtonClick }) => {
  return (
    <div className={styles.buttons}>
      {buttonList.map((item) => (
        <button
          onClick={() => onButtonClick(item)}
          className={styles.buttonSize}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
