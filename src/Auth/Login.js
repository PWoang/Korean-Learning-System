import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
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
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
      <div className="title col-4 mx-auto">Korean Learning System</div>
      <div className="welcome col-4 mx-auto">
        Ready to start your own journey?
      </div>
      <div className="content-form col-4 mx-auto">
        <div>
          <div className="login-social ">
            <button
              onClick={() =>
                window.open("https://facebook.com/login", "_blank")
              }
              className="d-flex align-items-center justify-content-center border rounded py-2"
            >
              <FaFacebook className="me-2 text-primary " size={22} />
              Login with Facebook
            </button>
            <button
              onClick={() =>
                window.open("https://accounts.google.com/signin", "_blank")
              }
              className="d-flex align-items-center justify-content-center border rounded py-2"
            >
              <FcGoogle className="me-2" size={22} />
              Login with Google
            </button>
          </div>
        </div>
        <div className="hr-break position-relative my-3 text-center">
          <hr />
          <span className="position-absolute top-50 start-50 translate-middle bg-white px-2">
            Or
          </span>
        </div>
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
