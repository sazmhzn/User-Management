import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios, { Axios } from "axios";


const UserDelete = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const data = [
    {
      id: 1,
      username: "John",
      email: "jon@gmailcom",
      age: 25,
      city: "London",
    },
    {
      id: 2,
      username: "Jane",
      email: "jane@gmailcom",
      age: 22,
      city: "New York",
    },
    {
      id: 3,
      username: "Paul",
      email: "paul@gmailcom",
      age: 30,
      city: "Paris",
    },
    {
      id: 4,
      username: "Paula",
      email: "paul@gmailcom",
      age: 30,
      city: "Paris",
    },
  ];

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:4005/users/${id}`)
    .then((res) => {
      console.log(res.data)
      setUser(res.data)
    }).catch((err) => {
      alert(err)
      console.log(err);
    })
  }, []);

  const deleteUser = () => {
    axios.delete(`http://localhost:4005/users/${id}`)
    .then((res) => {
      navigate('/userManagement')
    }).catch((err) => {
      alert(err)
      console.log(err);
    })
  }

  return (
    <>
      <h1>Are you sure you want to delete this?</h1>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Age: {user.age}</div>
      <div>City: {user.city}</div>
      <div className="button-group">
        <button
          type="button"
          className="delete"
          onClick={() => {
            navigate("/userManagement");
          }}
        >
          No
        </button>

        <button
          type="button"
          onClick={deleteUser}>
          Yes
        </button>
      </div>
    </>
  );
};

export default UserDelete;
