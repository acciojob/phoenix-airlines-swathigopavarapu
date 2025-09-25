import React from "react";
import { useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();

  return (
    <div style={{ textAlign: "center" }}>
      {/* <img
        // src="https://storage.googleapis.com/acciojob-open-file-collections/landing.png"
        alt="Landing"
        style={{ maxWidth: "100%" }}
      /> */}
      <h1>Welcome to Phoenix Airlines</h1>
      <button onClick={() => history.push("/flight-search")}>
        Search Flights
      </button>
    </div>
  );
};

export default Landing;
