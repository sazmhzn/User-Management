import React, { useState } from "react";

const AddUser = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    
      setEmail(e.target.value);
  }

  const handleAge = (e) => {
    return(
      setAge(e.target.value)
    )
  }

  const handleCity = (e) => {
    return(
      setCity(e.target.value)
    )
  }


  const saveForm = () => {
    console.log("saveform");
    console.log("Username: ", username);
    console.log("City: ", city);
    console.log("Email: ", email);
    console.log("Age: ", age);
  };

  return (
    <>
      <h1>Add user</h1>
      <div className="input-group">
        <label>Username</label>
        <input type="text" name="username" onChange={handleUserName} />
      </div>
      <div className="input-group">
        <label>Email</label>
        <input type="text" name="email" onChange={handleEmail} />
      </div>
      <div className="input-group">
        <label>Age</label>
        <input type="text" name="age" onChange={handleAge} />
      </div>
      <div className="input-group">
        <label>City</label>
        <input type="text" name="city"onChange={handleCity} />
      </div>

      <div>
        <button onClick={saveForm}>Save</button>
      </div>
    </>
  );
};

export default AddUser;
