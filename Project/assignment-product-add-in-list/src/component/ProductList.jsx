import { useState } from "react";
import ProductInfo from "./ProductInfo";
let ProductList = ({ productList, handleByButton }) => {
  let [activeItems, setActiveItems] = useState([]);
  let buyProduct = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };

  return (
    <div>
      <ul classNameName="list-group">
        {productList.map((item) => (
          <ProductInfo
            handleByButton={(even) => buyProduct(item, event)}
            key={item}
            item={item}
            bougth={activeItems.includes(item)}
          ></ProductInfo>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
