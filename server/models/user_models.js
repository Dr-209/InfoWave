import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
})

//+++++++++ password secure using bycrypt++++++++++++

userSchema.pre('save',async function(){  //data database ma save thata pela (pre) aa method run thase
// console.log("pre method", this)
const user =this;  //this ma je data enater karta hata e aave etke have user ma this no badho data aavi jase

if(!user.isModified("password")){
    next();          //jo password chnage nathi thayo meams k user alredy exist kare
}

try{
const saltRound =await bcrypt.genSalt(10);
const hash_password = await bcrypt.hash(user.password,saltRound)
user.password =hash_password;
}
catch(error){
    next(error);
}

})

// compare password
userSchema.methods.comparePassword =async function(password){
    return bcrypt.compare(password,this.password)
}


// json web token
//database ma store nai karvana, client side store kavana ,as a cookies or local storage
userSchema.methods.generateToken =async function(){
try{
return jwt.sign({
    userId: this._id.toString(),
    email: this.email,
    isAdmin:this.isAdmin
},
process.env.JWT_KEY,
{
    expiresIn: '30d'
}

)

}catch(error){
    console.error(error);
}
}

const User =new mongoose.model('User',userSchema)

export default User;