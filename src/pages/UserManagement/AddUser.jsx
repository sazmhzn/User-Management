import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";

import { ValidEmail } from "../../utils/Common";

const AddUser = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [age, setAge] = useState();
  // const [city, setCity] = useState();

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
    const errorMessage = {...erMessage};

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
    console.log("error message", erMessage);
    setIsSubmitted(true);

    if (validateForm()) {
      navigate("/userManagement");
    }
  };

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
