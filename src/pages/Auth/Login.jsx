import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
import Password from "../../components/PasswordField";
import Message from "../../components/Message";
import { showSuccess } from "../../utils/notification";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const doLogin = (e) => {
    let isLogin = false;
    if (email === "admin" && password === "admin") {
      isLogin = true;
    }
    console.log(email, password);

    if (isLogin) {
      showSuccess("Logged in successfully");
      localStorage.setItem("isLogin", "1");
      navigate("/UserManagement");
    } else {
      setError((prev) => "Invalid username and password");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "1") {
      navigate("/UserManagement");
    }
  });

  return (
    <div className="main">
      <div className="login-container">
        <h1>Login</h1>

        {error && <Message message={error} />}
        <h3 style={{ margin: "10px 0" }}>Enter your login credentials</h3>
        <form className="form-container" action="">
          <InputField label="Email" name="email" onChange={handleInputChange} />
          <Password
            label="Password"
            name="password"
            onChange={handleInputChange}
          />

          <button type="button" onClick={doLogin}>
            Submit
          </button>
        </form>
        <p>
          Not registered? <span style={{ textDecoration: "none", marginLeft: "4px" }}> Create an account </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
