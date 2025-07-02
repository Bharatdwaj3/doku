const express=require('express')
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("User List")
});

router
    .route("/:id")
    .get("/:id",(req,res)=>{
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put("/:id",(req,res)=>{
        res.send(`Update user with ID ${req.params.id}`)
    })
    .del("/:id",(req,res)=>{
        res.send(`Delete user with ID ${req.params.id}`)
    })

router.get("/new",(req,res)=>{
    res.send("User New form")
});



module.exports=router;