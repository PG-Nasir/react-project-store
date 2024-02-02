import styles from "../item.module.css";
let Item = ({ item }) => {
  return (
    <li classNameName={`${styles["line-link"]} list-group-item`}>{item}</li>
  );
};

export default Item;
