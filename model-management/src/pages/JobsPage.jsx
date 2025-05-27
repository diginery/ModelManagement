import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getJobs, createJob, deleteJob } from "../services/jobs";
import JobList from "../components/job/JobList";
import CreateJob from "../components/job/CreateJob";
import PageContainer from "../components/common/PageContainer";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  const handleOnSubmit = async (job) => {
    await createJob(job);
    await fetchJobs();
  };

  const handleRemoveJob = async (jobId) => {
    await deleteJob(jobId);
    await fetchJobs();
  };

  return (
    <PageContainer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16">
          <div className="mx-auto w-full md:w-auto max-w-sm">
            <CreateJob onSubmit={handleOnSubmit} />
          </div>
          <div>
            <JobList
              jobs={jobs}
              onJobClick={handleJobClick}
              onRemove={handleRemoveJob}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
