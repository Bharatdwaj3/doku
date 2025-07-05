const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB=require('./db');
const monarchyRoutes =require("./routes/monarchyRoutes");
const clergyRoutes =require("./routes/clergyRoutes");
const bourgouiseRoutes =require("./routes/bourgouiseRoutes");
const app=express();

connectDB();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Server is ready');
});

app.use('/monarchs',monarchyRoutes);
app.use('/clergy',clergyRoutes);
app.use('/bourgouise',bourgouiseRoutes);

{/*
app.get('/kings',(req,res)=>{
    const kings =[
        {
            id:1,
            name:'Louie',
            title:'Le roi Solei'
        },
        {
            id:2,
            name:'Wilhelm',
            title:'Der Alt fritz'
        },
        {
            id:3,
            name:'William',
            title:'William the Conquerer'
        },
        {
            id:4,
            name:'Wilhelm 2',
            title:'The Prince of GrapeShot'
        },
        {
            id:5,
            name:'Napolean',
            title:'master of Europe'
        }
    ]
    res.send(kings);
});
*/}

const port = process.env.PORT || 3005;

app.listen(port,()=>{
    console.log(`Serve at http:localhost:${port}`);
});


