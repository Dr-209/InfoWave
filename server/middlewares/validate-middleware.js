const validate =(schema) => async(req,res,next)=>{
    try{
        const parseBody= await schema.parseAsync(req.body);
  req.body =parseBody;
  next();
    }
    catch(err){
        const status=422;
        const message="Fill the input properly"
        const extraDetails=err.errors[0].message;

//   console.log(message);
const error ={
    status,
    message,
    extraDetails,
}
// res.status(400).json({msg:message})
next(error)
    }
}

export default validate