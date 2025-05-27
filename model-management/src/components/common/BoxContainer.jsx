export default function BoxContainer({ children, className = "" }) {
  return (
    <div
      className={`border-1 shadow-md p-4 ${className}`}
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      {children}
    </div>
  );
}
