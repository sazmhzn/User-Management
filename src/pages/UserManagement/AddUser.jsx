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

  const handleUserName = (e) => {
    // setUsername(e.target.value);
    setUser({...user, username: e.target.value})
  };

  const handleEmail = (e) => {
    // setEmail(e.target.value);
    setUser({...user, email: e.target.value})
  };

  const handleAge = (e) => {
    // return setAge(e.target.value);
    setUser({...user, username: e.target.value})
  };

  const handleCity = (e) => {
    // return setCity(e.target.value);
    setUser({...user, city: e.target.value})
  };

  const saveForm = () => {
    console.log("saveform");
    console.log("User: ", user);
 
    navigate("/userManagement")
  };

  return (
    <>
      <h1>Add user</h1>
      <div className="form-container">
        <div className="input-group">
          <label>Username</label>
          <input type="text" name="username"  onChange={handleUserName}  />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" name="email" value={user.email} onChange={handleEmail} />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="text" name="age" value={user.age} onChange={handleAge} />
        </div>
        <div className="input-group">
          <label>City</label>
          <input type="text" name="city" value={user.city} onChange={handleCity} />
        </div>
        <div>
          
          <button onClick={saveForm}>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
