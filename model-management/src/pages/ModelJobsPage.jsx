import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { getJobs } from "../services/jobs";
import JobList from "../components/job/JobList";
import PageContainer from "../components/common/PageContainer";

export default function ModelJobsPage() {
  const { modelId } = useParams();

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
    navigate(`/models/${modelId}/jobs/${jobId}`);
  };

  return (
    <PageContainer>
      <JobList jobs={jobs} onJobClick={handleJobClick} onRemove={() => {}} />
    </PageContainer>
  );
}
