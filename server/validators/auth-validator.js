import z from 'zod';

const signUpSchema =z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(2,{message:"Name must be at least 2 charcter"})
    .max(255,{message:"Name must not be 255 char"}),

    email:z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(2,{message:"Email must be at least 2 charcter"})
    .max(255,{message:"Email must not be 255 char"}),
          
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at least 10 charcter"})
    .max(20,{message:"Phone must not be 20 char"}),
          
    password:z
    .string({required_error:"Phone is required"})
    .min(7,{message:"Password must be at least 7 charcter"})
    .max(1024,{message:"Password must not be 1024 char"})
          
})

export default signUpSchema;