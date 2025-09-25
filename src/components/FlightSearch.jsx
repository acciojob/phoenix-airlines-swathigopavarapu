import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const sampleFlights = (from, to, date) => [
  { id: 1, airline: "Phoenix Air", from, to, date, time: "06:00", price: 3500 },
  { id: 2, airline: "SkyLine", from, to, date, time: "12:30", price: 4200 },
  { id: 3, airline: "CloudWays", from, to, date, time: "19:45", price: 3900 },
];

const FlightSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!from || !to || !date) return alert("Fill all fields");
    setResults(sampleFlights(from, to, date));
  };

  const handleBook = (flight) => {
    localStorage.setItem(
      "selectedFlight",
      JSON.stringify({ flight, tripType })
    );
    history.push("/flight-booking");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Search Flights</h2>

      <form onSubmit={handleSearch}>
        <div>
          <label>
            <input
              type="radio"
              name="trip"
              value="oneway"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            /> One-way
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="trip"
              value="round"
              checked={tripType === "round"}
              onChange={() => setTripType("round")}
            /> Round-trip
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Search</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {results.map((f) => (
          <div key={f.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <p>{f.airline}</p>
            <p>{f.from} → {f.to}</p>
            <p>{f.date} • {f.time}</p>
            <p>₹{f.price}</p>
            <button onClick={() => handleBook(f)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;
