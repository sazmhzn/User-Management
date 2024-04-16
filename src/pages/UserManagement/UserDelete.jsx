import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { showDanger } from "../../utils/notification";
import { deleteUser, getUsersByID } from "../../service/userManagementService";


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
    getUsersByID(id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  });

  const handleDeleteUser = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirm) {
      deleteUser(id)
      .then((res) => {
        showDanger("User deleted successfully")
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

        <button type="button" onClick={handleDeleteUser}>
          Yes
        </button>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
};

export default UserDelete;
