const express = require("express");
const dotenv = require('dotenv');

//Load env vars;
dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT || 5002;

const app = express();

app.listen(PORT,(err) => {
    if (err) {
      console.error(`Error occurred while starting the server: ${err}`);
    } else {
      console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
  });

app.get('/api/v1/bootcamps',(req,res) =>{
  res.status(200).json({sucess:true,msg:'Show all bootcamps'})
});

app.get("/api/v1/bootcamps:id",(req,res) =>{
    res.status(200).json({sucess:true,msg:`Fetch bootcamps with ${req.params.id}`})
    })

app.put("/api/v1/bootcamps:id",(req,res) =>{
        res.status(200).json({sucess:true,msg:`Updated bootcamps with ${req.params.id}`})
        })
        
app.delete("/api/v1/bootcamps:id",(req,res) => {
            res.status(200).json({sucess:true,msg:`Delete bootcamps with ${req.params.id}`})
        })

app.post("/api/v1/bootcamps",(req,res) =>{
    res.status(200).json({sucess:true,msg:'Create new bootcamps'})
})





