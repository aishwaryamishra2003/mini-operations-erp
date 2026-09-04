import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
  <div className="login-container">
    <div className="login-card">
      <h1>Mini Operations ERP</h1>
      <p>Sign in to continue</p>

      <input
        type="email"
        placeholder="Email Address"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={login}>
        Login
      </button>
    </div>
  </div>
);
}