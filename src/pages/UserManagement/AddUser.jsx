import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField";

const AddUser = () => {
  const navigate = useNavigate();

  // const [username, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [age, setAge] = useState();
  // const [city, setCity] = useState();

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  const [erMessage, setErMessager] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  const validateForm = () => {
    let isValid = true;
    const erMessage = {...erMessage}

    if (user.username === "") {
      erMessage.username = "Please enter your City.";
      isValid = false;
    }
    if (user.email === "") {
      erMessage.eamil = "Please enter your City.";
      isValid = false;
    }
    if (user.age === "") {
      erMessage.age = "Please enter your City.";
      isValid = false;
    }
    if (user.city === "") {
      erMessage.city = "Please enter your City.";
      isValid = false;
    }
    return isValid;
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUserInput = (e) => {
    // setUsername(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveForm = () => {
    setIsSubmitted(true);

    if (validateForm())
      navigate("/userManagement");
  };

  return (
    <>
      <h1>Add user</h1>
      <div className="form-container">
        <InputField
          label="Username"
          type="text"
          name="username"
          value={user.username}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.username}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.email}
        />

        <InputField
          label="Age"
          type="text"
          name="age"
          value={user.age}
          onChange={handleUserInput}
          isSubmitted={isSubmitted}
          error={erMessage.age}
        />

        <InputField
          label="City"
          type="text"
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
