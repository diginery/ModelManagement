export default function Email({ email, onChange }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
