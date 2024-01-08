import styles from "./Buttons.module.css";
let Buttons = ({ buttonList }) => {
  return (
    <div className={styles.buttons}>
      {buttonList.map((item) => (
        <button className={styles.buttonSize}>{item}</button>
      ))}
    </div>
  );
};

export default Buttons;
