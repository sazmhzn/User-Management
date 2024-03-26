
import InputField from "../../components/InputField";
import { Password } from "../../components/PasswordField";
import "./Login.css";

const Login = () => {
  return(
    <div className="login-container">
        <h1>Login</h1>
        <h3>Enter your login credentials</h3>
        <form className="form-container" action="">
        <InputField
          label="Username"
          name="username"
          
        />
        <Password
          label="Password"
          name="password"
          
        />
            <div className="wrap">
                <button type="submit" >
                    Submit
                </button>
            </div>
        </form>
        <p>Not registered? 
              <a href="#" style={{ textDecoration: "none" }}>
                Create an account
            </a>
        </p>
    </div>
  )
}

export default Login;