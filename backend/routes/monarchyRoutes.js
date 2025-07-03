const express = require('express');
const monarch = require('../models/monarchyModel');
const router=express.Router();

router.get('/monarchs',async(req,res)=>{
    try{
        const monarch= await monarch.find();
        res.json(monarch);
    }catch{
        res.status(500).json({message:error.message});
    }
});

router.post('/monarchs',async(req,res)=>{
    try{
        const monarch=new monarch(req.body);
        const savedMonarch=await monarch.save();
        res.status(201).json(savedMonarch);
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports=router;