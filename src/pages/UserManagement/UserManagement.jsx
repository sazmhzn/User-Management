import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const student = {
    name: "John Doe",
    roll: 213,
    phone: [12, 123, 123],
  };

  //object desctructuring
  const { name, roll, phone } = student;

  //Array desctructuring
  const [n, q, e] = phone;

  //spread operator
  const uzers = [
    {
      id: 1,
      name: "james",
    },
  ];

  const uzer = {
    id: 2,
    name: "Ras",
  };

  const newUser = [...uzers, uzer];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setUsers(data);
    }, 1000);
  }, []);

  const data = [
    {
      id: 1,
      username: "Rames",
      email: "ram@gamil.com",
      age: 14,
      city: "Lalitput",
    },
    {
      id: 2,
      username: "Paul",
      email: "paul@gamil.com",
      age: 30,
      city: "Kathmandu",
    },
    {
      id: 3,
      username: "James",
      email: "jame@gamil.com",
      age: 30,
      city: "Khopa",
    },
  ];

  return (
    <>
      <h1>User management</h1>

      <div className="button-container">
        <Link to="/userManagement/AddUser">
          {" "}
          <button> Add user </button>
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 && (
            <>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td> {user.username} </td>
                    <td> {user.age} </td>
                    <td> {user.age} </td>
                    <td> {user.city} </td>
                    <td>
                      <Link to={`/UserManagement/UserDetail/${user.id}`}>
                        {" "}
                        <button className="detail">Detail</button>{" "}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/UserManagement/edit/${user.id}`}>
                        {" "}
                        <button>Edit</button>{" "}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/UserManagement/delete/${user.id}`}>
                        {" "}
                        <button className="delete">Delete</button>{" "}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </>
          )}

          {users.length === 0 && (
            <tr>
              <td colSpan={5}>No record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UserManagement;
