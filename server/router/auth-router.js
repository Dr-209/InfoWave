import express from "express";
const router =express.Router();
// const {home,register}=require('./controllers/auto-controller.js')
import authControllers from "../controllers/auth-controller.js"
import validate from "../middlewares/validate-middleware.js";
import signUpSchema from "../validators/auth-validator.js";


// router.route("/").get((req,res)=>{
//     res.status(200).send("Welcome router");

// });
router.route("/").get(authControllers.home)
router.route("/register").post(validate(signUpSchema),authControllers.register)
router.route("/login").post(authControllers.login)

    export default router;