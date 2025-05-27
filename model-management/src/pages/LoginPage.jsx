import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/auth";
import Email from "../components/login/Email";
import Password from "../components/login/Password";
import PageContainer from "../components/common/PageContainer";
import BoxContainer from "../components/common/BoxContainer";
import Button from "../components/common/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);
      navigate("/");
    } catch {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <PageContainer>
      <BoxContainer className="space-y-2">
        <h2 className="text-center py-2">Login</h2>
        <Email email={email} onChange={setEmail} />
        <Password password={password} onChange={setPassword} />
        <Button onClick={handleLogin} className="my-4 mx-auto block">
          Enter
        </Button>
      </BoxContainer>
    </PageContainer>
  );
}
