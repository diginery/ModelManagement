import { isManagerUser } from "../../services/auth";
import DeleteButton from "../common/DeleteButton";

export default function JobList({ jobs, onJobClick, onRemove }) {
  const isManager = isManagerUser();

  return (
    <div>
      <h3 className="py-2 text-center">Jobs</h3>
      <table className="shadow-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Start Date</th>
            <th>Days</th>
            <th>Location</th>
            <th>Comments</th>
            {isManager && <th></th>}
          </tr>
        </thead>
        <tbody>
          {jobs.length === 0 ? (
            <tr>
              <td colSpan={isManager ? 7 : 6}>No jobs found.</td>
            </tr>
          ) : (
            jobs.map((job) => (
              <tr
                key={job.jobId}
                onClick={() => onJobClick(job.jobId)}
                style={{ cursor: "pointer" }}
              >
                <td>{job.jobId}</td>
                <td>{job.customer}</td>
                <td>{new Date(job.startDate).toLocaleDateString("en-GB")}</td>
                <td>{job.days}</td>
                <td>{job.location}</td>
                <td>{job.comments}</td>
                {isManager && (
                  <td>
                    <DeleteButton
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(job.jobId);
                      }}
                    />
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
