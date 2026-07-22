import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import Logo from "../assets/logo.png";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);

      localStorage.setItem("token", response.token);

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);

      alert("Login Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={Logo} alt="Futovat" className="login-logo" />

        <h1>Administrator Login</h1>

        <p>Sign in to manage Futovat.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
