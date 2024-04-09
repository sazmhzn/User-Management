import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import { ValidEmail } from "../../utils/Common";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [erMessage, setErMessager] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const validateForm = () => {
    let isValid = true;
    const errorMessage = { ...erMessage };

    if (user.username === "") {
      errorMessage.username = "Please enter your username.";
      console.log(errorMessage);
      isValid = false;
    } else {
      errorMessage.username = "";
    }
    if (user.password === "") {
      errorMessage.password = "Please enter your password.";
      console.log(errorMessage);
      isValid = false;
    } else {
      errorMessage.password = "";
    }

    if (user.email === "") {
      errorMessage.email = "Please enter your Email.";
      isValid = false;
    } else if (!ValidEmail(user.email)) {
      errorMessage.email = "Please enter a valid eamil";
      isValid = false;
    } else {
      errorMessage.email = "";
    }

    if (user.age === "") {
      errorMessage.age = "Please enter your age.";
      isValid = false;
    } else {
      errorMessage.age = "";
    }

    if (user.city === "") {
      errorMessage.city = "Please enter your City.";
      isValid = false;
    } else {
      errorMessage.city = "";
    }

    setErMessager(errorMessage);
    console.log(isValid);

    return isValid;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUserInput = (e) => {
    // setUsername(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };



  const saveForm = () => {
    const uuid = uuidv4();

    if (validateForm()) {
      const item = { ...user, id: uuid };
      console.log("users", item);

      axios
        .post("http://localhost:4005/users", item)
        .then(() => {
          toast.success(
            '🦄 Wow so easy!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          navigate("/userManagement");
        })
        .catch((err) => {
          // toast.error("He");
          alert(err);
        });
      // navigate("/userManagement");
    } else {
      toast.error(
        '🦄 Wow it did not save', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      )

    }
  };

  //create a input firld with leable?

  return (
    <>
      <h1>Add user</h1>
      <div className="form-container">
        <InputField
          label="Username"
          name="username"
          value={user.username}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.username}
        />
        <PasswordField
          label="Password"
          name="password"
          value={user.password}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.password}
        />

        <InputField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.email}
        />

        <InputField
          label="Age"
          name="age"
          value={user.age}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.age}
        />

        <InputField
          label="City"
          name="city"
          value={user.city}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.city}
        />
        <div>
          <button onClick={saveForm}>Save</button>
        </div>
      </div>

    </>
  );
};

export default AddUser;
