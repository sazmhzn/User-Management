import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";


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
        axios.get(`http://localhost:4005/users/${id}`)
        .then((res) => {
          console.log(res.data)
          setUser(res.data)
        }).catch((err) => {
          alert(err)
          console.log(err);
        })
      }, []);

    return(
        <>

        <div className="background">
          {/* <img src="https://img.freepik.com/premium-photo/blue-glass-abstract-background-with-pattern-blue-glass_869640-19383.jpg" alt="" /> */}
          <div className="cover-image">WJ</div>
        </div>

        <h1>User Details {id} </h1>
        <div>Username: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>City: {user.city}</div>
        <div>Email: {user.email}</div>
        </>
    );
}

export default UserDetail;