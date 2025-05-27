import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobDetails } from "../services/jobs";
import {
  getModelExpenses,
  addExpense,
  deleteExpense,
} from "../services/expenses";
import ModelExpenseList from "../components/expense/ModelExpenseList";
import AddExpense from "../components/expense/AddExpense";
import PageContainer from "../components/common/PageContainer";
import JobDetail from "../components/job/JobDetail";

export default function ModelJobDetailsPage() {
  const { modelId, jobId } = useParams();
  const [job, setJob] = useState();
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const data = await getModelExpenses(modelId);
    console.log("Fetched expenses:", data);

    const jobExpenses = data.filter(
      (expense) => expense.jobId === Number(jobId)
    );
    console.log("Filtered job expenses:", jobExpenses);
    setExpenses(jobExpenses);
  };

  useEffect(() => {
    async function fetchJobDetails() {
      const data = await getJobDetails(jobId);
      setJob(data);
      fetchExpenses();
    }
    fetchJobDetails();
  }, [jobId]);

  const handleRemoveExpense = async (expenseId) => {
    console.log("Removing expense with ID:", expenseId);

    await deleteExpense(expenseId);
    await fetchExpenses();
  };

  const handleAddExpense = async (expense) => {
    await addExpense(expense);
    await fetchExpenses();
  };

  return (
    <PageContainer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16">
          <div className="mx-auto w-full md:w-auto max-w-sm space-y-8">
            <JobDetail job={job} />
            <AddExpense
              modelId={modelId}
              jobId={jobId}
              onAdd={handleAddExpense}
            />
          </div>
          <div>
            <ModelExpenseList
              expenses={expenses}
              onDelete={handleRemoveExpense}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
