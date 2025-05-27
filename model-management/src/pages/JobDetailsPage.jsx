import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  getJobDetails,
  addModelToJob,
  removeModelFromJob,
} from "../services/jobs";
import { getModels } from "../services/models";
import ModelList from "../components/model/ModelList";
import PageContainer from "../components/common/PageContainer";
import AddModel from "../components/model/AddModel";
import JobDetail from "../components/job/JobDetail";

export default function JobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState();
  const [assignedModels, setAssignedModels] = useState([]);
  const [unassignedModels, setUnassignedModels] = useState([]);

  useEffect(() => {
    async function fetchJobDetails() {
      const data = await getJobDetails(jobId);
      setJob(data);
      setAssignedModels(data.models);
    }
    fetchJobDetails();
  }, [jobId]);

  useEffect(() => {
    async function fetchUnassignedModels() {
      const models = await getModels();
      const assignedModelIds = assignedModels.map(
        (assigned) => assigned.modelId
      );
      const availableModels = models.filter(
        (model) => !assignedModelIds.includes(model.modelId)
      );
      setUnassignedModels(availableModels);
    }
    fetchUnassignedModels();
  }, [assignedModels]);

  const fetchModels = async () => {
    const data = await getJobDetails(jobId);
    setAssignedModels(data.models);
  };

  const handleRemoveModel = async (modelId) => {
    await removeModelFromJob(jobId, modelId);
    await fetchModels();
  };

  const handleAddModel = async (modelId) => {
    await addModelToJob(jobId, modelId);
    await fetchModels();
  };

  return (
    <PageContainer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16">
          <div className="mx-auto w-full md:w-auto max-w-sm space-y-8">
            <JobDetail job={job} />
            <AddModel models={unassignedModels} onAdd={handleAddModel} />
          </div>
          <div>
            <ModelList models={assignedModels} onDelete={handleRemoveModel} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
