import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const CheckDB = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();

        try{
          const response = await axios.post("http://localhost:4000/user/login",{
            username: Username,
            password: Password,
          },{
            withCredentials:true
          });
          setMessage(response.data.message || "Login successfully");
          setUsername("");
          setPassword("");
          navigate("/");

        }catch(error){
          console.log("Login failed: ",error.response?.data || error.message);
          setMessage("Login failed Invaled Creds");
          setIsLoggedIn(false);
        }
  };

  const handleLogout=()=>{
    setIsLoggedIn(false);
    setMessage("Logged out successfully!");
  }

  if(isLoggedIn){
        return(
          <div>
            <div className="bg-green-700 h-[400px] w-[800px] m-64 p-4 rounded">
              <h2 className="text-white mb-4">Welcome! You are logged in.</h2>
              <p className="text-green-100 mb-4">{message}</p>
              <LogoutButton onLogout={handleLogout} />
            </div>
          </div>
      );
    }

  return (
    
    <>
      

    <div className="bg-amber-700 h-[1200px] w-[800px] m-64 p-4 rounded">
        <h2 className="text-white mb-4">{message}</h2>
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-4">
          
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
          <button 
            className="bg-white text-amber-700 p-2 rounded"
            type="submit">
              Login
          </button>
        </form>
    </div>
    
    </>
  );
};

export default CheckDB;
