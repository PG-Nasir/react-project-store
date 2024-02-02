import Probs from "./Probs";

let items = ["Chittagong", "Dhaka", "Barisal", "Khulna", "Comilla", "Jossor"];
let itemShow = items.length === 0 ? false : true;

function MapMethod() {
  return (
    <>
      <div classNameName="container">
        <h1>
          {" "}
          {itemShow ? "Data found" : "Not data"} Get All Division from list
          using Map Method
        </h1>{" "}
        <ul classNameName="list-group">
          <Probs items={items}></Probs>
        </ul>
      </div>
    </>
  );
}

export default MapMethod;
