import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    
    const {id} = useParams();

    const data = [
      {
        id: 1,
        username: 'John',
        email: 'jon@gmailcom',
        age: 25,
        city: 'London'
      },
      {
        id: 2,
        username: 'Jane',
        email: 'jane@gmailcom',
        age: 22,
        city: 'New York'
      },
      {
        id: 3,
        username: 'Paul',
        email: 'paul@gmailcom',
        age: 30,
        city: 'Paris'
      },
      {
        id: 4,
        username: 'Paula',
        email: 'paul@gmailcom',
        age: 30,
        city: 'Paris'
      }
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