const express=require('express')
const User = require("../models/UserModel");
const cookieParser=require('cookie-parser');
const {v4: uuidv4} = require('uuid');
const { route } = require('../routes/monarchyRoutes');
const router=express.Router();

router.get('/register',(req,res)=>{
  res.render('register');
});

{/*router.get('/login',(req,res)=>{
  const sessionCookie = req.cookies.userSession || '';
  if(sessionCookie!==''){
    const parts=sessionCookie.split('-');
    if(parts.length===2){
      res.render('welcome',{
          loggedIn:true,
          username:parts[0]
      });
      return;
    }
  }
  res.render('login',{
    notLoggedIn:true
  });
});

router.get('/register',async(req,res)=>{
  let{name, username, email, password}=req.body;
  name=name.trim();
  username=username.trim();
  email=email.trim();
  password=password.trim();
  try{
    const existUser=await User.findOne({username: username});
    if(existUser){
      res.render('register',{
        error:'User already exists'
      });
      return;
    }
    const newUser=new User({
      name: name,
      username:username,
      email:email,
      password:password
    });
    await newUser.save();
    res.render('login',{
      message:'Registration Successful!! Please Log in'
    });
  }catch(error){
    res.render('register',{
      error:'Registration failed Please try again!'
    });
  }
});
*/}



router.get('/profile',async(req,res)=>{
  const sessionCookie=req.cookies.userSession || '';
  if(sessionCookie===''){
    res.redirect('/register');
    return;
  }
  const parts=sessionCookie.split('-');
  if(parts.length>=2){
    const username=parts[0];
    try{
      const user=await User.findOne({username: username});
      if(user){
        res.render('profile',{
          username:user.username
        });
        return;
      }
    }catch(error){
      console.error('Database error: ',error);
    }
  }
  res.redirect('/login');
});

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  router
};
