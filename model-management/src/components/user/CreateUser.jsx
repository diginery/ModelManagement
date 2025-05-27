import { useState } from "react";
import BoxContainer from "../common/BoxContainer";
import Button from "../common/Button";

export default function CreateUser({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
    onSubmit(newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <BoxContainer>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 grid grid-cols-2 items-center"
      >
        <label htmlFor="first-name-input">First Name:</label>
        <input
          id="first-name-input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="last-name-input">Last Name:</label>
        <input
          id="last-name-input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="col-span-2 justify-self-center mt-4">
          Create
        </Button>
      </form>
    </BoxContainer>
  );
}
