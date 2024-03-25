import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../../components/InputField"

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

  
  const validateForm = () => {
    let isValid = true;
    if(user.usernmame === '') {
      isValid = false
    }
    if(user.email === '') {
      isValid = false
    }
    if(user.age === '') {
      isValid = false
    }
    if(user.city === '') {
      isValid = false
    }
    return isValid
    
  }

  const [isSubmitted,  setIsSubmitted] = useState(false);

  const handleUserInput = (e) => {
    // setUsername(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveForm = () => {
    console.log("saveform");
    setIsSubmitted(true)

    if( validateForm() )
    
    // console.log("User: ", user);

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
          isSubmitted= {isSubmitted}
          error="username is required"
        />
     
        <div>
          <button onClick={saveForm}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
