import User from "../models/user_models.js";
// USer has collection who has whole data
// import bcrypt from "bcryptjs"

export const home=async(req,res)=>{
    try{
        res.status(200)
        .send("HElo home")
    }
    catch(error){
 console.log(error);
    }
}

//Get Register DATA +++
export const register =async(req,res)=>{
    try{
        const {username,email,phone,password}=req.body;

        // Is email exist ??  +++++++++++
        const userExist =await User.findOne({email})
       
        if(userExist){  //user already exist , so need to registion again
            return res.status(400).json({msg:"email already exist"})
        }

         //hash the password :password encrytion 
        // const saltRound=10;
        // const hash_password =await bcrypt.hash(password,saltRound);

        //IF not exist then create
       const userCreated= await User.create({
        username,
        email,
        phone,
        // password:hash_password,
        password,
    })
       res.status(201).json({
        msg:userCreated,
         token:await userCreated.generateToken(),
        userId:userCreated._id.toString(),  //string ma hova joi`

       });
    }


    catch(error){
        // res.status(500).json("internal server errror");
       next(error)
    }
}

const login = async(req,res) =>{
try {
      const {email,password} = req.body;
      
      const userExist =await User.findOne({email});
      console.log(userExist)

      if(!userExist){
        return res.status(400).json({msg:"Invalid Credentials"})
      }

    //   const user = await bcrypt.compare(password,userExist.password);
// function for comapre password
const user =await userExist.comparePassword(password)


      if(user){
        res.status(200).json({
            msg:"Login Successful",
             token:await userExist.generateToken(),
            userId:userExist._id.toString(),
        })
      }
      else{
        res.status(401).json({msg:"Invalid email or password"})
      }
    
} catch (error) {
    res.status(500).json("internal server errror")
}
}

export default {home,register,login};