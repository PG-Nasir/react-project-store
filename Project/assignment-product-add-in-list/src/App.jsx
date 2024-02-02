import styles from "./App.module.css";
import SearchDisplay from "./component/SearchDisplay";
import ProductList from "./component/ProductList";
import { useState } from "react";

function App() {
  let [productList, setProductList] = useState([]);

  let takeValue = (event) => {
    //console.log(event.target.value);
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let exitvalue = productList.includes(newItem);
      if (!exitvalue) {
        let latestItem = [...productList, newItem];
        setProductList(latestItem);
        event.target.value = "";
      }
    }
  };

  return (
    <div classNameName={`${styles.productAppContainer}`}>
      <SearchDisplay onKeyDown={takeValue}></SearchDisplay>
      <ProductList
        handleByButton={(event) => buyProduct(event)}
        productList={productList}
      ></ProductList>
    </div>
  );
}

export default App;
