import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LogoutButton = ({onLogout}) => {
  const [isLoading, setIsLoading]=useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
      setIsLoading(true);
    
    try{
      const respose=await axios.post(
        "http://localhost:4000/user/logout",{},{
          withCredentials:true
        }
      );
      if (respose.data.success){
        if(onLogout){
          onLogout();
        }
        navigate("/");
      }
    }catch(error){
      console.log("Logout failed: ",error);
      alert("Logout failed. Please try again");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    
          <button 
            onClick={handleLogout}
            disabled={isLoading}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
            type="submit">
              {isLoading ? 'Logging out...' : 'Logout'}
          </button>
  );
};

export default LogoutButton;
