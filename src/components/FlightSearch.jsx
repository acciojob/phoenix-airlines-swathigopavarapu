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
    if (!from || !to || !date) {
      alert("Please fill all fields");
      return;
    }
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
        <label>
          <input
            type="radio"
            name="trip"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />{" "}
          One-way
        </label>
        <label>
          <input
            type="radio"
            name="trip"
            value="round"
            checked={tripType === "round"}
            onChange={() => setTripType("round")}
          />{" "}
          Round-trip
        </label>

        <br /><br />

        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {/* Flight results wrapped in ul/li */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {results.length === 0 && <li>No flights found</li>}
        {results.map((f) => (
          <li
            key={f.id}
            style={{
              border: "1px solid gray",
              margin: "10px auto",
              padding: "10px",
              maxWidth: "400px",
              textAlign: "left",
            }}
          >
            <p><strong>{f.airline}</strong></p>
            <p>
              {f.from} → {f.to}
            </p>
            <p>
              {f.date} • {f.time}
            </p>
            <p>Price: ₹{f.price}</p>
            <button onClick={() => handleBook(f)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightSearch;
