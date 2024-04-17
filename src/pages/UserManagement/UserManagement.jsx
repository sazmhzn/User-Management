import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import InputField from "../../components/InputField";
import { getAllUsers, searchByUsername } from "../../service/userManagementService";

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
  const [searchUsername, setSearchUsername] = useState('');
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }, []);
  const handleSearchUsername = (e) => {
    setSearchUsername(e.target.value);
    searchByUsername(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }

  return (
    <>
      <h1>User management</h1>

      <div className="button-container">
        <Link to="/userManagement/AddUser">
          {" "}
          <button> Add user </button>
        </Link>
      </div>

      <div className="vi-flex-container">
        <div >
          <InputField 
          name="username"
          placeholder={`Search by Username...`}
          value={searchUsername}
          onChange={handleSearchUsername}
          />
        </div>
        
      </div>

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
             link: "/UserManagement/EditUser",
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
