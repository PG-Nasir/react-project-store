import styles from "./ProductInfo.module.css";
let ProductInfo = ({ item, handleByButton, bougth }) => {
  return (
    <div>
      <li
        classNameName={`${styles.itemContainer} list-group-item ${
          bougth && "active"
        } 
        }`}
      >
        {item}
        <button
          onClick={handleByButton}
          classNameName={`${styles.productInfoButton} btn btn-primary`}
        >
          Buy
        </button>
      </li>
    </div>
  );
};

export default ProductInfo;
