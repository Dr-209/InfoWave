import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
// const URI =" mongodb://127.0.0.1:27017/mern_app";
const URI= process.env.MONGOURI;

const connectDB = async () =>{
    try {
       await mongoose.connect(URI);
       console.log("MongoDB connected!!");
    } catch (error) {
        console.error("connection failed in mongoDB connection");
        process.exit(1);       
    }
}
export default connectDB;