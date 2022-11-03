import  express  from "express";
import {} from 'dotenv/config';
import dbconnection from "./db/connectdb.js";

const app=express();
const port=process.env.PORT||8000;
dbconnection();
app.get('/',(req,res)=>{
    res.send("hello everyone")
})
app.listen(port,()=>{
console.log(`server is running on https://localhost:${port}`)
})