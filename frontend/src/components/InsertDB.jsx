import { useState } from "react";
import axios from "axios";

const InsertDB = () => {
  const [Username, setUsername] = useState("");
   const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  


  const handleSubmit = async (event) => {
    event.preventDefault();

        try{
          const response= await axios.post("http://localhost:4000/user",{
            username: Username,
            password: Password,
            email:Email,
            name:name
          });
          setMessage(response.data.message || "User Inserted successfully");
          setName("");
          setUsername("");
          setPassword("");
          setEmail("");
        }catch(error){
          console.log("Error inserting user: ",error);
          setMessage("Failed to insert user");
        }
  };

  return (
    <div className="bg-amber-700 h-[1200px] w-[800px] m-64 p-4 rounded">
        <h2 className="text-white mb-4">{message}</h2>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-amber-100">Name: </label>
            <input 
              className="w-full p-1 mt-1"
              type="text" 
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}  
            />
          </div>
          <div>
            <label className="text-amber-100">Username: </label>
            <input 
              className="w-full p-1 mt-1"
              type="text" 
              placeholder="Username"
              value={Username}
              onChange={(e)=>setUsername(e.target.value)}  
            />
          </div>
          <div>
            <label className="text-amber-100">Password: </label>
            <input 
              className="w-full p-1 mt-1"
              type="text" 
              placeholder="Password"
              value={Password}
              onChange={(e)=>setPassword(e.target.value)}  
            />
          </div>
          <div>
            <label className="text-amber-100">Email: </label>
            <input 
              className="w-full p-1 mt-1"
              type="email" 
              placeholder="Email"
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}  
            />
          </div>
          <button 
            className="bg-white text-amber-700 p-2 rounded"
            type="submit">
              Sumbit
          </button>
        </form>
    </div>
  );
};

export default InsertDB;
