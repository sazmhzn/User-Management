import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
import Password from "../../components/PasswordField";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    if(event.target.name === 'email') {
      setEmail(event.target.value);
    }
    if(event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }
  const doLogin = (e) => {
    let isLogin = false;
    if(email === "admin" && password === "admin") {
      isLogin = true;
    }
    console.log(email, password);

    if(isLogin) {
      navigate('/UserManagement');
    } else {
      alert('Login failed');
    }
  }

  return (
    <div className="main">
      <div className="login-container">
      <h1>Login</h1>
      <h3>Enter your login credentials</h3>
      <form className="form-container" action="">
        <InputField label="Email" name="email" onChange={handleInputChange} />
        <Password label="Password" name="password" onChange={handleInputChange} />

        <button type="submit" onClick={doLogin}>Submit</button>
      </form>
      <p>
        Not registered?
        <a href="#" style={{ textDecoration: "none", marginLeft: "4px" }}>
          Create an account
        </a>
      </p>
    </div>
    </div>
    
  );
};

export default Login;
