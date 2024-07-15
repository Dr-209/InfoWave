import mongoose from "mongoose";
// import Schema from "mongoose";
// import model from "mongoose";

const contactSchema =new mongoose.Schema({       //we can also write Schema if we import schema 

    username:{type:String,required:true},
email:{type:String,required:true},
message:{type:String,required:true},

})

// create model or Collection
const Contact =new  mongoose.model("Contact",contactSchema);

export default Contact;