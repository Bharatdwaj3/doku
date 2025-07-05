import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

const Monarch = () => {

    const [bourgouise, setBourgouise] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/bourgouise/`)
      .then((response) => {
        setBourgouise(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing Monarch", error);
      });
  }, []);
  return (
    <>
         <h1>bourgouise</h1>
        {
          // eslint-disable-next-line no-unused-vars
          bourgouise.map((bourgouise, index)=>
            <div key={bourgouise._id}>
              <h3>{bourgouise.name}</h3>
              <p>{bourgouise.city}</p>
              <p>{bourgouise.occupation}</p>
              <p>{new Date(bourgouise.dob).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
               <p>{new Date(bourgouise.dod).toLocaleDateString('en-US',{
                year:'numeric',
                month:'long',
                day:'numeric',
              })}</p>
              <img src="/image/Image_not_found_bourgeois.jpg" alt="" />
              <p>{bourgouise.alive}</p>
              <p>{bourgouise.religion}</p>
            </div>
          )
        }
    </>
  )
}

export default Monarch