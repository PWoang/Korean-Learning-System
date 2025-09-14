import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="header">
        Don't have an account?
        <button onClick={() => navigate("/signup")}>Signup</button>
      </div>
      <div className="title col-4 mx-auto">Korean Learning System</div>
      <div className="welcome col-4 mx-auto">
        Ready to start your own journey?
      </div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot Password?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            Login To KLS
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
