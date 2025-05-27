import { useNavigate } from "react-router";
import { getUserModelId, isManagerUser, logout } from "../../services/auth";
import NavLink from "./NavLink";
import LogoutButton from "./LogoutButton";

export default function NavBar() {
  const navigate = useNavigate();
  const isManager = isManagerUser();
  const modelId = getUserModelId();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="w-full flex justify-between px-4 py-2"
      style={{ backgroundColor: "var(--color-bg-tertiary)" }}
    >
      <div className="flex gap-8">
        {}
        <NavLink to="/">Home</NavLink>
        {isManager && <NavLink to="/jobs">Jobs</NavLink>}
        {isManager && <NavLink to="/models">Models</NavLink>}
        {isManager && <NavLink to="/managers">Managers</NavLink>}
        {!isManager && <NavLink to={`/models/${modelId}/jobs`}>Jobs</NavLink>}
      </div>
      <LogoutButton onClick={handleLogout} />
    </nav>
  );
}
