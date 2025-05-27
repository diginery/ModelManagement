import { FaTrashCan } from "react-icons/fa6";

export default function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center cursor-pointer"
    >
      <FaTrashCan />
    </button>
  );
}
