import mongoose from "mongoose";

const dblink=process.env.MONGODB;
const dbconnection=()=>{
mongoose.connect(dblink)
.then(()=>{console.log("database connected")})
.catch(()=>{console.log(error)})
}
export default dbconnection;
