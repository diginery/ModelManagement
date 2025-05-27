export default function Password({ password, onChange }) {
  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
