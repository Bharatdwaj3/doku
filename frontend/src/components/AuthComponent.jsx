
import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AuthComponent = () => {

    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [name, setName]=useState("");
    const [message, setMessage]=useState("");

    const [isLogin, setIsLogin]=useState(true);
    const[isLoggedIn, setIsLoggedIn]=useState(false);

    const navigate=useNavigate();

    const clearForm=()=>{
        setUsername("");
        setEmail("");
        setPassword("");
        setName("");
    };

    const handleRegister=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post("http://localhost:4000/user",{
                username:username,
                password:password,
                email:email,
                name:name
            });

            setMessage(response.data.message || "User Registered succcessfully Please login");
            clearForm();
            setIsLogin(true);
        }catch(error){
            console.log("Error registering user: ",error);
            setMessage("Failed to register user Please try again");
        }
    };

    const handleLogin=async(eve)=>{
        eve.preventDefault();
    
    try{
        const response = await axios.post("http://localhost:4000/user/login",{
            username: username,
            password: password,
        },{
            withCredentials: true
        });

        setMessage(response.data.message || "Login successful!!");
        setIsLoggedIn(true);
        clearForm();
        navigate("/profile");
    }catch(error){
        console.log("Login failed", error.response?.data || error.message);
        setMessage("Login failed Please check your credentials");
        setIsLoggedIn(false);
    }
    };
    

    const toggleMode=()=>{
        setIsLogin(!isLogin);
        setMessage("");
        clearForm();
    }

    if(isLoggedIn){
        return(
            <div className="bg-green-700 h-[400px] w-[800px] m-66 p-4 rounded">
                <h2 className="text-shadow-amber-800 mb-4 text-xl font-bold">Welcome You are Logged in</h2>
                <p className="text-green-100 mb-4">{message}</p>
                
            </div>
            
        )
    }


  return (
    <div className="bg-amber-700 h-auto w-[800px] m-66 p-6 rounded">
        <div className="mb-6">
            <h2 className="text-white text-2xl font-bold mb-2">
                {isLogin ? "Login" : "Register"}
            </h2>
            <p className="text-amber-800 mb-4">
                {isLogin ? "Welcome back! Please sign in" : "Create your new account"}
            </p>
        </div>
        {message && (
            <div className={`mb-4 p-3 rounded ${
                message.includes("success") || message.includes("successful")
                ? "bg-green-600 text-blue-700"
                : "bg-red-600 text-blue-900"
            }`}>
                {message}
            </div>
        )}

        <form 
            onSubmit={isLogin ? handleLogin : handleRegister}
            className="flex flex-col gap-4"
        >
            {!isLogin && (
                <div>
                    <label className="text-amber-600 block mb-1">Name: </label>
                    <input
                        className="w-full p-3 rounded border-2 border-amber-300  focus:border-amber-500 focus:outline-none" 
                        type="text"
                        placeholder="Name.."
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required={!isLogin}
                        />
                </div>
            )}
            <div>
                    <label className="text-amber-600 block mb-1">Username: </label>
                    <input
                        className="w-full p-3 rounded border-2 border-amber-300  focus:border-amber-500 focus:outline-none" 
                        type="text"
                        placeholder="Username.."
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                        />
                </div>
                {!isLogin && (
                <div>
                    <label className="text-amber-600 block mb-1">Name: </label>
                    <input
                        className="w-full p-3 rounded border-2 border-amber-300  focus:border-amber-500 focus:outline-none" 
                        type="text"
                        placeholder="Email.."
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required={!isLogin}
                        />
                </div>
                
            )}
            <div>
                    <label className="text-amber-600 block mb-1">Password: </label>
                    <input
                        className="w-full p-3 rounded border-2 border-amber-300  focus:border-amber-500 focus:outline-none" 
                        type="text"
                        placeholder="Password.."
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        />
                </div>
                <button
                    className="bg-white text-amber-700 p-3 rounded font-semibold hover:bg-amber-50 transitionb-colors duration-200"
                    type="submit"
                >
                    {isLogin ? "Login":"Register"}
                </button>
        </form>
            <div className="mt-6 text-center">
                <p className="text-amber-100">
                    {isLogin ? "Don't have an account? " : "Already have an account"}
                    <button
                        className="text-white font-semibold hover:underline"
                        onClick={toggleMode}
                        type="button"
                    >
                        {isLogin ? "Register here":"Login here"}
                    </button>
                </p>
            </div>


    </div>
  )
}

export default AuthComponent