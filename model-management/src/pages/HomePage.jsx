import { useEffect } from "react";
import { useNavigate } from "react-router";
import PageContainer from "../components/common/PageContainer";
import { isLoggedIn, isManagerUser } from "../services/auth";

export default function HomePage() {
  const loggedIn = isLoggedIn();
  const isManager = isManagerUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  return (
    <PageContainer>
      <h3 className="py-4">Welcome to the Model Management System</h3>
      <p className="text-center">
        {isManager
          ? "Managers have full oversight of jobs and models, including the ability to manage team members and model users. "
          : "Models can access their own job assignments and manage their related expenses. "}
        Use the navigation bar above to explore the different sections of the
        system.
      </p>
    </PageContainer>
  );
}
