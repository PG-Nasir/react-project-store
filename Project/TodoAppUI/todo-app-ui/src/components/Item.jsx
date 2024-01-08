import styles from "../item.module.css";
let Item = ({ item }) => {
  return <li className={`${styles["line-link"]} list-group-item`}>{item}</li>;
};

export default Item;
