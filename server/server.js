
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
const app =express();
import authRouter from "./router/auth-router.js"
import contactRoute from "./router/contact-router.js"
import connectDB from './utils/db.js'
import errorMiddleware from "./middlewares/error-middleware.js";
dotenv.config();

// for :forntend -backend connection if any request come form frontend [port 5173] then add in database
const corsOptions ={
    origin :"http://localhost:5173",
    methods:"GET, POST, PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions))


// require('dotenv').config();
app.use(express.json())


app.use("/api/auth",authRouter);
app.use("/api/form",contactRoute)

//connection pela errormidileware no use karvano -jo error avse to connection  nai thay
   app.use(errorMiddleware);

   
const PORT =5000;
    connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port ${PORT}`);
    });
})