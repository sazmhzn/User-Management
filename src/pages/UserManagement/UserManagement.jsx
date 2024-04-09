import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import axios from "axios";

const UserManagement = () => {

  const header = [
    {
      key: "username",
      label: "Username",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "age",
      label: "Age",
    },
    {
      key: "city",
      label: "City",
    }
  ]
  

  const [users, setUsers] = useState([]);
 
 
  useEffect(() => {
    axios.get("http://localhost:4005/users")
    .then((res) => {
      console.log(res.data)
      // const result = [];
      // for (let data of res.data){
      //   result.push({
      //     username : data.id,
      //     email: data?.name?.english,
      //     age: data?.base?.HP,
      //     city:data?.type

      //   })
      // }
      setUsers(res.data)
    }).catch((err) => {
      alert(err)
      console.log(err);
    })
  }, []);

// console.log(users);
  return (
    <>
      <h1>User management</h1>

      <div className="button-container">
        <Link to="/userManagement/AddUser">
          {" "}
          <button> Add user </button>
        </Link>
      </div>

      {/* <table>
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
      </table> */}

      <Table 
         data={users}
         header={header}
         actions={[
           {
             name: "Detail",
             link: "/UserManagement/UserDetail",
             className: "btn action  btn-default"
           },
           {
             name: "Edit",
             link: "/user-management/edit",
             className: "btn action "
           },
           {
             name: "Delete",
             link: "/UserManagement/UserDelete",
             className: " action delete"
           }
         ]}
      />
    </>
  );
};

export default UserManagement;
