import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const sampleFlights = (from, to, date) => [
  { id: 1, airline: "Phoenix Air", from, to, date, time: "06:00", price: 3500 },
  { id: 2, airline: "SkyLine", from, to, date, time: "12:30", price: 4200 },
  { id: 3, airline: "CloudWays", from, to, date, time: "19:45", price: 3900 },
];

const FlightSearch = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(sampleFlights(from, to, date));
  };

  const handleBook = (flight) => {
    localStorage.setItem("selectedFlight", JSON.stringify(flight));
    history.push("/flight-booking");
  };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <img
        // src="https://storage.googleapis.com/acciojob-open-file-collections/flight-search.png"
        alt="Flight Search"
        style={{ maxWidth: "100%" }}
      /> */}
      <h2>Search Flights</h2>

      <form onSubmit={handleSearch}>
        <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
        <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Search</button>
      </form>

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
  );
};

export default FlightSearch;
