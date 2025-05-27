import API from "./api";

export async function getJobs() {
  try {
    const response = await API.get("/jobs");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
}

export async function createJob(job) {
  try {
    const response = await API.post("/jobs", job);
    return response.data;
  } catch (error) {
    console.error("Error creating job:", error);
  }
}

export async function getJobDetails(id) {
  try {
    const response = await API.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job details:", error);
  }
}

export async function deleteJob(id) {
  try {
    const response = await API.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting job:", error);
  }
}

export async function updateJob(id, job) {
  try {
    const response = await API.put(`/jobs/${id}`, job);
    return response.data;
  } catch (error) {
    console.error("Error updating job:", error);
  }
}

export async function addModelToJob(jobId, modelId) {
  try {
    const response = await API.post(`/jobs/${jobId}/model/${modelId}`);
    return response.data;
  } catch (error) {
    console.error("Error adding model to job:", error);
  }
}

export async function removeModelFromJob(jobId, modelId) {
  try {
    const response = await API.delete(`/jobs/${jobId}/model/${modelId}`);
    return response.data;
  } catch (error) {
    console.error("Error removing model from job:", error);
  }
}
