import React from 'react'
import { Link } from "react-router-dom";


const UserManagement = () => {


  const users = [
    {
      username: "Rames",
      email: "ram@gamil.com",
      age: 14,
      city: "Lalitput",
    },
    {
      username: "Paul",
      email: "paul@gamil.com",
      age: 30,
      city: "Kathmandu",
    },
    {
      username: "James",
      email: "jame@gamil.com",
      age: 30,
      city: "Khopa",
    },
  ];

  return (
    <>
      <h1>User management</h1>
      <button>
      <Link to="/AddUser">Add user</Link>
      </button>
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Age</th>
          <th>City</th>
        </tr>
        {users.map((user) => {
          return (
            <tr>
              <td> {user.username} </td>
              <td> {user.age} </td>
              <td> {user.age} </td>
              <td> {user.city} </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UserManagement;
