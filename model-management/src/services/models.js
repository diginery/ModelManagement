import API from "./api";

export async function getModels() {
  try {
    const response = await API.get("/models");
    return response.data;
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

export async function createModel(model) {
  try {
    const response = await API.post("/models", model);
    return response.data;
  } catch (error) {
    console.error("Error creating model:", error);
  }
}

export async function deleteModel(id) {
  try {
    const response = await API.delete(`/models/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting model:", error);
  }
}

export async function getModelJobs(id) {
  try {
    const response = await API.get(`/models/${id}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching model jobs:", error);
  }
}
