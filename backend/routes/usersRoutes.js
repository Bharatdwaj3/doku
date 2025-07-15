const { v4: uuidv4 } = require('uuid');
const express = require('express');
const User = require('../models/UserModel');
const router=express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/userController.js');


router.get('/', getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


router.post('/login',async(req, res)=>{
   let {username, password}=req.body;
  username=username.trim();
  password=password.trim();
  try{
    const user = await User.findOne({username: username});
    if(user && user.password.trim()===password){
      const sessionToken=uuidv4();
      const cookieValue=`${username}-${sessionToken}`;
      res.cookie('userSession',cookieValue,{
        httpOnly:true,
        maxAge:36000,
        path:'/'
      });
      return res.status(200).json({
        success:true,
        loggedIn:true,
        username:username,
        message:'Login Successful'
      });
    }else{
        return res.status(401).json({
        error:'Invalid username or pasword'
      });
    }
  }catch(error){
    return res.status(500).json({
       success:false,
      error:'Login failed Please try again'
    });
  }
});


router.post('/logout',async(req, res)=>{
  try{
    res.clearCookie('userSession',{
      httpOnly:true,
      path:'/'
    });
    return re.status(200).json({
      success:true,
      message:'Logged out successfully'
    });
  }catch(error){
    return res.status(500).json({
      success:false,
      error:'Logout Failed'
    });
  }
});


module.exports=router;