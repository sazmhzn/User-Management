import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    
    const {id} = useParams();

    const data = [
        {
          id:1,
          username: "Rames",
          email: "ram@gamil.com",
          age: 14,
          city: "Lalitput",
        },
        {
          id:2,
          username: "Paul",
          email: "paul@gamil.com",
          age: 30,
          city: "Kathmandu",
        },
        {
          id:3,
          username: "James",
          email: "jame@gamil.com",
          age: 30,
          city: "Khopa",
        },
      ];

      const [user, setUser] = useState({
        username: "",
        email: "",
        age: "",
        city: "",
      });

      useEffect(() => {
        const newUser = data.find((obj) => obj.id.toString() === id.toString())
        if(newUser) {
           setUser(newUser); 
        }
        
      }, [])

    return(
        <>

        <h1>User Details {id} </h1>
        <div>Username: {user.username}</div>
        </>
    );
}

export default UserDetail;