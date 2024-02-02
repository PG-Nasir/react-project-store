import styles from "./Buttons.module.css";
let Buttons = ({ buttonList }) => {
  return (
    <div classNameName={styles.buttons}>
      {buttonList.map((item) => (
        <button classNameName={styles.buttonSize}>{item}</button>
      ))}
    </div>
  );
};

export default Buttons;
