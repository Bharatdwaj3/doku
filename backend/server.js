const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

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

const port = process.env.port || 3005;

app.listen(port,()=>{
    console.log(`Serve at http:localhost:${port}`);
});