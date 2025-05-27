import { useState } from "react";
import BoxContainer from "../common/BoxContainer";
import Button from "../common/Button";
export default function CreateJob({ onSubmit }) {
  const [customer, setCustomer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState(0);
  const [location, setLocation] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      customer,
      startDate,
      days: parseInt(days, 10),
      location,
      comments,
    };
    onSubmit(newJob);
    setCustomer("");
    setStartDate("");
    setDays(0);
    setLocation("");
    setComments("");
  };

  return (
    <div>
      <h3 className="py-2 text-center">New Job</h3>
      <BoxContainer>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 grid grid-cols-2 items-center"
        >
          <label htmlFor="customer-input">Customer:</label>
          <input
            id="customer-input"
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
          <label htmlFor="date-input">Start Date:</label>
          <input
            id="date-input"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label htmlFor="days-input">Days:</label>
          <input
            id="days-input"
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
          <label htmlFor="location-input">Location:</label>
          <input
            id="location-input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <label htmlFor="comment-input">Comments:</label>
          <textarea
            id="comment-input"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <Button type="submit" className="col-span-2 justify-self-center mt-4">
            Create
          </Button>
        </form>
      </BoxContainer>
    </div>
  );
}
