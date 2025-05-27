import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import NavBar from "./components/navigation/NavBar";
import LoginPage from "./pages/LoginPage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import ManagersPage from "./pages/ManagersPage";
import ModelsPage from "./pages/ModelsPage";
import ModelJobsPage from "./pages/ModelJobsPage";
import ModelJobDetailsPage from "./pages/ModelJobDetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <h1 className="text-center pb-4">Model Management</h1>
        {location.pathname !== "/login" && <NavBar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/models/:modelId/jobs" element={<ModelJobsPage />} />
          <Route
            path="/models/:modelId/jobs/:jobId"
            element={<ModelJobDetailsPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
