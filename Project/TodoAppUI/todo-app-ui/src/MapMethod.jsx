import Probs from "./Probs";

let items = ["Chittagong", "Dhaka", "Barisal", "Khulna", "Comilla", "Jossor"];
let itemShow = items.length === 0 ? false : true;

function MapMethod() {
  return (
    <>
      <div className="container">
        <h1>
          {" "}
          {itemShow ? "Data found" : "Not data"} Get All Division from list
          using Map Method
        </h1>{" "}
        <ul className="list-group">
          <Probs items={items}></Probs>
        </ul>
      </div>
    </>
  );
}

export default MapMethod;
