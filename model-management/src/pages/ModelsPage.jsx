import { useEffect, useState } from "react";
import { getModels, createModel, deleteModel } from "../services/models";
import ModelList from "../components/model/ModelList";
import CreateUser from "../components/user/CreateUser";
import PageContainer from "../components/common/PageContainer";

export default function ModelsPage() {
  const [models, setModels] = useState([]);

  const fetchModels = async () => {
    const data = await getModels();
    setModels(data);
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleDeleteModel = async (modelId) => {
    await deleteModel(modelId);
    await fetchModels();
  };

  const handleCreateUser = async (model) => {
    await createModel(model);
    await fetchModels();
  };

  return (
    <PageContainer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16">
          <div className="mx-auto w-full md:w-auto max-w-sm">
            <h3 className="py-2 text-center">New Model</h3>
            <CreateUser onSubmit={handleCreateUser} />
          </div>
          <div>
            <ModelList models={models} onDelete={handleDeleteModel} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
