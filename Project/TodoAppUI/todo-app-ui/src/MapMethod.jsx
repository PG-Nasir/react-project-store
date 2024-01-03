let items = ["Chittagong", "Dhaka", "Barisal", "Khulna", "Comilla", "Jossor"];

function MapMethod() {
  return (
    <>
      <div className="container">
        <h1> Get All Division from list using Map Method</h1>{" "}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </>
  );
}

export default MapMethod;
