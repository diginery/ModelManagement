import { useState } from "react";
import BoxContainer from "../common/BoxContainer";
import Button from "../common/Button";
export default function AddModel({ models, onAdd }) {
  const [selectedModel, setSelectedModel] = useState();

  return (
    <div>
      <h3 className="py-2 text-center">Add Model</h3>
      <BoxContainer>
        <select
          className="border"
          value={selectedModel}
          onChange={(e) => setSelectedModel(Number(e.target.value))}
        >
          <option value="">Select a model</option>
          {models.map((model) => (
            <option key={model.modelId} value={model.modelId}>
              {model.modelId} - {model.firstName} {model.lastName}
            </option>
          ))}
        </select>
        <Button
          onClick={() => {
            onAdd(selectedModel);
            setSelectedModel(null);
          }}
          disabled={!selectedModel}
          className="mt-6 center mx-auto block"
        >
          Confirm
        </Button>
      </BoxContainer>
    </div>
  );
}
