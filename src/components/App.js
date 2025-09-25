import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing";
import FlightBooking from "./FlightBooking";
import Confirmation from "./Confirmation";
import FlightSearch from "./FlightSearch";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> |{" "}
          <Link to="/flight-search">Flight Search</Link> |{" "}
          <Link to="/flight-booking">Flight Booking</Link> |{" "}
          <Link to="/confirmation">Confirmation</Link>
        </nav> */}

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/flight-search" component={FlightSearch} />
          <Route path="/flight-booking" component={FlightBooking} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;