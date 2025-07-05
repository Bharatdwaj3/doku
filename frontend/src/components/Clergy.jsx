import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

const Monarch = () => {

    const [clergy, setClergy] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/clergy/`)
      .then((response) => {
        setClergy(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing Monarch", error);
      });
  }, []);
  return (
    <>
         <h1>clergy</h1>
        {
          // eslint-disable-next-line no-unused-vars
          clergy.map((clergy, index)=>
            <div key={clergy._id}>
              <h3>{clergy.name}</h3>
              <p>{clergy.title}</p>
              <p>{clergy.Hpst}</p>
              <p>{new Date(clergy.dob).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
               <p>{new Date(clergy.dod).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
              <img src="/image/Image_not_found_clergy.jpg" alt="" />
              <p>{clergy.alive}</p>
              <p>{clergy.religion}</p>
            </div>
          )
        }
    </>
  )
}

export default Monarch