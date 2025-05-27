import { Link } from "react-router";

export default function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="font-serif"
      style={{
        color: "var(--color-text)",
        fontSize: "1.1em",
        fontWeight: "bold",
      }}
    >
      {children}
    </Link>
  );
}
