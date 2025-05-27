import BoxContainer from "../common/BoxContainer";
export default function JobDetail({ job }) {
  if (!job) {
    return <p>Loading job details...</p>;
  }
  return (
    <div>
      <h3 className="py-2 text-center">Job Id: {job.jobId}</h3>
      <BoxContainer className="space-y-2">
        <p>
          <strong>Customer:</strong> {job.customer}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {new Date(job.startDate).toLocaleDateString("en-GB")}
        </p>
        <p>
          <strong>Days:</strong> {job.days}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Comments:</strong> {job.comments}
        </p>
      </BoxContainer>
    </div>
  );
}
