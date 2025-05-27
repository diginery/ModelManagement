import { useState } from "react";
import Button from "../common/Button";
import BoxContainer from "../common/BoxContainer";

export default function AddExpense({ modelId, jobId, onAdd }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      modelId,
      jobId,
      date,
      amount: parseFloat(amount),
      text,
    };
    onAdd(newExpense);
    setDate("");
    setAmount("");
    setText("");
  };

  return (
    <div>
      <h3 className="py-2 text-center">New Expense</h3>
      <BoxContainer>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 grid grid-cols-2 items-center"
        >
          <label className="text-left" htmlFor="date-input">
            Date:
          </label>
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label className="text-left" htmlFor="amount-input">
            Amount:
          </label>
          <input
            id="amount-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <label className="text-left" htmlFor="description-input">
            Description:
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <Button type="submit" className="col-span-2 justify-self-center mt-4">
            Add
          </Button>
        </form>
      </BoxContainer>
    </div>
  );
}
