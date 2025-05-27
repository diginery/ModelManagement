import DeleteButton from "../common/DeleteButton";

export default function ModelList({ models, onDelete }) {
  return (
    <div>
      <h3 className="py-2 text-center">Models</h3>
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
          {models.length === 0 ? (
            <tr>
              <td colSpan={4}>No models found.</td>
            </tr>
          ) : (
            models.map((model) => (
              <tr key={model.modelId}>
                <td>{model.modelId}</td>
                <td>
                  {model.firstName} {model.lastName}
                </td>
                <td>{model.email}</td>
                <td>
                  <DeleteButton onClick={() => onDelete(model.modelId)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
