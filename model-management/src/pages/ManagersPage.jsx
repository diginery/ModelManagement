import { useEffect, useState } from "react";
import {
  getManagers,
  createManager,
  deleteManager,
} from "../services/managers";
import ManagerList from "../components/manager/ManagerList";
import CreateUser from "../components/user/CreateUser";
import PageContainer from "../components/common/PageContainer";

export default function ManagersPage() {
  const [managers, setManagers] = useState([]);

  const fetchManagers = async () => {
    const data = await getManagers();
    setManagers(data);
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const handleDeleteManager = async (managerId) => {
    await deleteManager(managerId);
    await fetchManagers();
  };

  const handleCreateUser = async (manager) => {
    await createManager(manager);
    await fetchManagers();
  };

  return (
    <PageContainer>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-16">
          <div className="mx-auto w-full md:w-auto max-w-sm">
            <h3 className="py-2 text-center">New Manager</h3>
            <CreateUser onSubmit={handleCreateUser} />
          </div>
          <div>
            <ManagerList managers={managers} onDelete={handleDeleteManager} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
