/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Badge } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { Header, Footer } from "../components/index";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const getUserFromStorage = () => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        return JSON.parse(storedUser);
      }
      const cookies=document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "user" || name === "userData") {
          return JSON.parse(decodeURIComponent(value));
        }
      }
      return null;
    } catch (error) {
      console.error("Error parsing uuser data: ", error);
      return null;
    }
  };

  const handleLogout=async()=>{
    setLogoutLoading(true);
    try{
      const response=await axios.post(
        "http://localhost:4000/user/logout",
        {},{
          withCredentials:true
        }
      );

      if(response.data.success){
        localStorage.removeItem("user");
        navigate("/");
      }
    }catch(error){
      console.error("logout failed: ",error);
      setError("Logout failed, Please try again");
    }finally{
      setLogoutLoading(false);
    }
  };
  
  const fetchUserProfile = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:4000/user/profile`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user profile: ", error);
      throw error;
    }
  };

  const calculateAccountAge = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffTime = Math.abs(now - created);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `${diffDays} days`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month${months > 1 ? "s" : ""}`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years > 1 ? "s" : ""}`;
    }
  };

  const generateAvatarUrl = (username) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      username
    )}&background=random&color=fff&size=96`;
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setLoading(true);
        const storedUser = getUserFromStorage();
        if (storedUser) {
          setUserData(storedUser);
        } else {
          try {
            const response = await axios.get(
              "http://localhost:4000/user/profile",
              {
                withCredentials: true,
              }
            );
            setUserData(response.data);
          } catch (error) {
            throw new Error("Please login to view your profile");
          }
        }
        setError("");
      } catch (error) {
        console.error("Error loading your data: ", error);
        setError(error.message || "Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="relative h-[3000px] w-screen bg-sky-100 mt-[70px]">
          <Header />
          <div className="max-w-3xl mx-auto py-10 px-4">
            <Paper
              elevation={8}
              className="rounded-2xl p-6 flex items-center justofy-center"
            >
              <CircularProgress size={60} />
              <Typography variant="h6" className="ml-4">
                Loading..profile
              </Typography>
            </Paper>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="relative h-[3000px] w-screen bg-sky-100 mt-[70px]">
          <Header />
          <div className="max-w-3xl mx-auto py-10 px-4">
            <Alert severity="error" className="mb-4">
              {error}
            </Alert>
            <Paper elevation={8} className="rounded-2xl p-6 text-center">
              <Typography variant="h6">Unable to load profile</Typography>
              <Typography variant="body2" className="mt-2">
                Please try logging in again or contact support if the problem
                persists
              </Typography>
            </Paper>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative  h-[3000px] w-screen bg-sky-100 mt-[70px]">
        <Header />
        <div className="max-w-3xl mx-auto py-10 px-4">
          <Paper
            elevation={8}
            className="bg-gradient-to-r from bg-purple-500 via-pink-500 to-yellow-500 rounded-2xl p-6 flex items-center gap-6 animate-fade-in"
          >
            <Avatar
              src="/images/"
              alt="Avatar"
              sx={{
                width: 96,
                height: 96,
                border: "4px solid white",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              }}
            />
            <div className="flex-1">
              <Typography
                variant="h4"
                className="text-white drop-shadow-lg font-extrabold"
              >
                {userData.name || userData.username}
              </Typography>
              <Typography variant="body1" className="text-white mt-1 opacity-90">
                @{userData.username}
              </Typography>
              <Typography variant="body1" className="text-white mt-1 opacity-75">
                @{userData.email}
              </Typography>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-white text-purple-700 font-medium px-3 py01 rounded-full shadow text-sm">
                  Karma: {userData.karma || 0}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="bg-white text-purple-700 font-medium px-3 py01 rounded-full shadow text-sm">
                  Account Age: {userData.createdAt?calculateAccountAge(userData.createdAt): 'Unknowm'}
                </span>
                  {userData.isVerified && (
                    <span className="bg-green-500 text-white font-medium px-3 py-1 rounded-full text-sm">
                       Verified
                    </span>
                  )}
              </div>
            </div>
          </Paper>

          <Paper elevation={4} className="rounded-2xl p-6 mb-4">
              <Typography variant="h5" className="mb-4 font-bold text-gray-800">
                  Profile Information
              </Typography>
              <div className="grid grid-cols-1 md:grid:grid-cols-2 gap-4">
                  <div>
                    <Typography variant="subtitle2" className="text-gray-600 font-semibold">
                      Full Name
                    </Typography>
                    <Typography variant="body1" className="text-gray-800">
                        {userData.name || 'Not provided'}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="text-gray-600 font-semibold">
                        Username
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                        {userData.username}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="text-gray-600 font-semibold">
                      Email Address
                    </Typography>
                    <Typography variant="body" className="text-gray-600">
                      {userData.email}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="text-gray-600 font-semibold">
                      Member Since
                    </Typography>
                    <Typography variant="body" className="text-gray-600">
                      {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString(): 'Unknown'}
                    </Typography>
                  </div>              
              </div>
              <div className="flex flex-col gap-2">
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<LogoutIcon/>}
                    onClick={handleLogout}
                    disabled={logoutLoading}
                    sx={{
                      backgroundColor:'rgba(255, 255, 255, 0.2)',
                      color:'white',
                      backdropFilter:'blur(10px)',
                      '&:hover':{
                        backgroundColor:'rgba(255, 255, 255, 0.3)',
                      },
                    }}>
                    {logoutLoading ? 'Logging out...':'Logout'} Logout
                  </Button>
              </div>
          </Paper>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
