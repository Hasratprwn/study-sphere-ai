const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req,res)=>{

    res.send("Study Sphere AI Backend Running");

});

app.get("/api/chat",(req,res)=>{

    res.json({
        message:"Hello from AI Backend"
    });

});

app.listen(5000, ()=>{

    console.log("Server running on port 5000");

});