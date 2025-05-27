import API from "./api";

export async function addExpense(expense) {
  try {
    const response = await API.post("/expenses", expense);
    return response.data;
  } catch (error) {
    console.error("Error creating expense:", error);
  }
}

export async function deleteExpense(id) {
  try {
    const response = await API.delete(`/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
}

export async function getModelExpenses(modelId) {
  try {
    const response = await API.get(`/expenses/model/${modelId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching model expenses:", error);
  }
}
