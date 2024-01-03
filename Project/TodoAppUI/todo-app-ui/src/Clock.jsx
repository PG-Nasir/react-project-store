let Clock = () => {
  let time = new Date();

  return (
    <center>
      {" "}
      <p>
        Current date time: {time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
      </p>
    </center>
  );
};

export default Clock;
