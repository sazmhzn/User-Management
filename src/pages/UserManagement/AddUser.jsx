import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  })

  const handleUserInput = (e) => {
    // setUsername(e.target.value);
    setUser({...user, [e.target.name]: e.target.value})
  };


  const saveForm = () => {
    console.log("saveform");
    // console.log("User: ", user);
 
    navigate("/userManagement")
  };

  return (
    <>
      <h1>Add user</h1>
      <div className="form-container">
        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username"  onChange={handleUserInput}  />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" value={user.email} onChange={handleUserInput} />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="text" name="age" value={user.age} onChange={handleUserInput} />
        </div>
        <div className="input-group">
          <label>City</label>
          <input type="text" name="city" value={user.city} onChange={handleUserInput} />
        </div>
        <div>
          
          <button onClick={saveForm}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
