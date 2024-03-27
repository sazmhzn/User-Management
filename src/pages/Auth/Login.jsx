import InputField from "../../components/InputField";
import { Password } from "../../components/PasswordField";

const Login = () => {
  return (
    <div className="main">
      <div className="login-container">
      <h1>Login</h1>
      <h3>Enter your login credentials</h3>
      <form className="form-container" action="">
        <InputField label="Username" name="username" />
        <Password label="Password" name="password" />

        <button type="submit">Submit</button>
      </form>
      <p>
        Not registered?
        <a href="#" style={{ textDecoration: "none" }}>
          Create an account
        </a>
      </p>
    </div>
    </div>
    
  );
};

export default Login;
