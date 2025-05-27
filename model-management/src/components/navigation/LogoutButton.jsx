import { IoLogOut } from "react-icons/io5";

export default function LogoutButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-serif flex items-center gap-2"
      style={{
        color: "var(--color-text)",
        fontSize: "1.1em",
        fontWeight: "bold",
      }}
    >
      <IoLogOut />
      Logout
    </button>
  );
}
