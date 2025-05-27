export default function Button({
  onClick,
  children,
  disabled = false,
  type = "button",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-4 py-2 rounded cursor-pointer font-bold shadow-md min-w-32 ${className}`}
      style={{
        backgroundColor: "var(--color-btn)",
      }}
    >
      {children}
    </button>
  );
}
