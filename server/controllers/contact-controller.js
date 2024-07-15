import Contact from "../models/contact-model.js";

// const contactForm = async(req,res) =>{
//     try {
//         const {username,email,message} =  req.body;
//         // console.log(response);
//     await  Contact.create({
//         username,
//         email,
//         message
//     })

//      return res.status(200).json({message:"message send successfully"})
        
//     } catch (error) {
//         console.log("Erorr")
//         return res.status(500).json({message:"message not deliverd"});
//     }
// }
const contactForm = async (req, res) => {
    try {
      const response = req.body;
      await Contact.create(response);
      return res.status(200).json({ message: "message send successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "message not delivered" });
    }
  };

export default contactForm;