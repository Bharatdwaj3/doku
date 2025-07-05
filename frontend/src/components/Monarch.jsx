import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

const Monarch = () => {

    const [monarchs, setmonarchs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/monarchs/`)
      .then((response) => {
        setmonarchs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing Monarch", error);
      });
  }, []);
  return (
    <>
         <h1>Monarchs</h1>
        {
          // eslint-disable-next-line no-unused-vars
          monarchs.map((monarchs, index)=>
            <div key={monarchs._id}>
              <h3>{monarchs.name}</h3>
              <p>{monarchs.title}</p>
              <p>{new Date(monarchs.dob).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
               <p>{new Date(monarchs.dod).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
              <img src="/image/Image_not_found_monarch.jpg" alt="" />
              <p>{monarchs.alive}</p>
              <p>{monarchs.religion}</p>
            </div>
          )
        }
    </>
  )
}

export default Monarch