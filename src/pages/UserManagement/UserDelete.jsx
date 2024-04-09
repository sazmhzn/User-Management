import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDelete = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4005/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  });

  const deleteUser = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      axios
        .delete(`http://localhost:4005/users/${id}`)
        .then((res) => {
          toast.error("😔 User deleted succesfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/userManagement");
        })
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
  };

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

        <button type="button" onClick={deleteUser}>
          Yes
        </button>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default UserDelete;
