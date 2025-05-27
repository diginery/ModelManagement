import DeleteButton from "../common/DeleteButton";

export default function ModelExpenseList({ expenses, onDelete }) {
  return (
    <div>
      <h3 className="py-2">Expenses</h3>
      <table className="shadow-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan={5}>No expenses found.</td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.expenseId}>
                <td>{expense.expenseId}</td>
                <td>{new Date(expense.date).toLocaleDateString("en-GB")}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{expense.text}</td>
                <td>
                  <DeleteButton onClick={() => onDelete(expense.expenseId)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
