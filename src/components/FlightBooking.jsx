import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const FlightBooking = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleConfirm = () => {
    const e = {};
    if (!name) e.name = "Enter name";
    if (!email) e.email = "Enter email";
    if (!phone) e.phone = "Enter phone";
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const flight = JSON.parse(localStorage.getItem("selectedFlight"));
    localStorage.setItem("bookingDetails", JSON.stringify({ flight, name, email, phone }));
    history.push("/confirmation");
  };

  return (
    <div>
      <h1>Flight Booking</h1>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      {errors.name && <div className="error">{errors.name}</div>}
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      {errors.email && <div className="error">{errors.email}</div>}
      <input type="text" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      {errors.phone && <div className="error">{errors.phone}</div>}
      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
};

export default FlightBooking;
