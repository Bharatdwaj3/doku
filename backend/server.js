const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB=require('./db');
const monarchyRoutes =require("./routes/monarchyRoutes");
const clergyRoutes =require("./routes/clergyRoutes");
const bourgouiseRoutes =require("./routes/bourgouiseRoutes");
const userRoutes =require("./routes/usersRoutes");
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
app.use('/user',userRoutes);

const port = process.env.PORT || 3005;

app.listen(port,()=>{
    console.log(`Serve at http:localhost:${port}`);
});


