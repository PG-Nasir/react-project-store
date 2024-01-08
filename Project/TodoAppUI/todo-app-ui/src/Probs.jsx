import Item from "./components/Item";
let Probs = ({ items }) => {
  let divisionList = items;
  let itemSize = items.length;
  return (
    <ul>
      {divisionList.map((item) => (
        <Item key={item} item={item}>
          {" "}
        </Item>
      ))}
    </ul>
  );
};
export default Probs;
