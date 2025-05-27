import DeleteButton from "../common/DeleteButton";

export default function ManagerList({ managers, onDelete }) {
  return (
    <div>
      <h3 className="py-2 text-center">Managers</h3>
      <table className="shadow-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {managers.length === 0 ? (
            <tr>
              <td colSpan={4}>No managers found.</td>
            </tr>
          ) : (
            managers.map((manager) => (
              <tr key={manager.managerId}>
                <td>{manager.managerId}</td>
                <td>
                  {manager.firstName} {manager.lastName}
                </td>
                <td>{manager.email}</td>
                <td>
                  <DeleteButton onClick={() => onDelete(manager.managerId)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
