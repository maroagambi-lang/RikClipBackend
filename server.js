const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/clip",(req,res)=>{

const videoUrl = req.body.url;

res.json({
message:"Video received",
url:videoUrl,
status:"processing"
});

});

app.get("/",(req,res)=>{
res.send("Rikclip AI Backend Running");
});

app.listen(3000,()=>{
console.log("Server started");
});
