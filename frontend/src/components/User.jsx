import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

 const User = () => {

    const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/`)
      .then((response) => {
        setuser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing User", error);
      });
  }, []);
  return (
    <>
         <h1>user</h1>
        {
            user.map((user)=>
            <div key={user._id}>
              <h3>Name: {user.name}</h3>
              <p>Username: {user.username}</p>
               <p>Password: {user.password}</p>
                <p>Email: {user.email}</p>
            </div>
          )
        }
    </>
  )
}

export default User;

