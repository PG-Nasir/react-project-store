let Features = () => {
  return (
    <div className="features-content">
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-success" style={{ width: "25%" }}>
          25%
        </div>
      </div>
      <br></br>
      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-info text-dark"
          style={{ width: "50%" }}
        >
          50%
        </div>
      </div>
      <br></br>
      <div
        className="progress"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-warning text-dark"
          style={{ width: "75%" }}
        >
          75%
        </div>
      </div>
      <br></br>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-danger" style={{ width: "100%" }}>
          100%
        </div>
      </div>
    </div>
  );
};

export default Features;
