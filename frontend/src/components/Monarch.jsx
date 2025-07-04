import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react'

const Monarch = () => {

    const [monarchs, setmonarchs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/monarch`)
      .then((response) => {
        setmonarchs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sodaing movies:", error);
      });
  }, []);
  return (
    <>
         <h1>Monarchies</h1>
        <p>monarchss : {monarchs.length}</p>
        {
          // eslint-disable-next-line no-unused-vars
          monarchs.map((monarchs, index)=>
            <div key={monarchs.id}>
              <h3>{monarchs.name}</h3>
              <p>{monarchs.title}</p>
            </div>
          )
        }
    </>
  )
}

export default Monarch