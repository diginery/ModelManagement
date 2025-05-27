import API from "./api";

export async function getManagers() {
  try {
    const response = await API.get("/managers");
    return response.data;
  } catch (error) {
    console.error("Error fetching managers:", error);
  }
}

export async function createManager(manager) {
  try {
    const response = await API.post("/managers", manager);
    return response.data;
  } catch (error) {
    console.error("Error creating manager:", error);
  }
}

export async function deleteManager(id) {
  try {
    const response = await API.delete(`/managers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting manager:", error);
  }
}
