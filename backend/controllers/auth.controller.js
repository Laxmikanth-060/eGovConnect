import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import Customer from "../models/Customers.js";

export const signup = async (req, res) => {
    try {
          const {username,fullname,email,mobile,password}=req.body;

      const emailRegex = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      );
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email" });
      }
  
      const existingUser = await Customer.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already taken" });
      }
      const existingEmail = await Customer.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already taken" });
      }
  
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newCustomer = new Customer({
        fullname: fullname,
        email: email,
        username: username,
        password: hashedPassword,
        mobile:mobile,
      });
  
      if (newCustomer) {
        await newCustomer.save();
        // const token = await new emailToken({
        //   userId: newUser._id,
        //   token: crypto.randomBytes(32).toString("hex"),
        // }).save();
  
        // const url = `${process.env.BASE_URL}users/${newUser._id}/verify/${token.token}`;
        // await sendEmail(newUser.email, "Verify Email", url);
  
        // console.log("Email sent Successfully");
        generateTokenAndSetCookie(newCustomer._id,res)

        res.status(201).json({
            _id:newCustomer._id,
            fullnamename:newCustomer.fullname,
            email:newCustomer.email,
            mobile:newCustomer.mobile,
            username:newCustomer.username,
            profileImg:newCustomer.profileImg,
        })
  
        // return res
        //   .status(201)
        //   .json({
        //     message: "Verification mail has been sent to your email.Please verity.",
        //   });
      } else {
        res.status(400).json({ error: "Invalid User Data" });
      }
  
  
     }catch(error){
          console.log("Error in Signup controller",error);
          res.status(500).json({error:"Internal Server Error:"})
     }
  };


export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await Customer.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: "Username or Password wrong" });
      }
      const isPassword = await bcrypt.compare(password, user.password);
      if (!isPassword) {
        return res.status(400).json({ error: "Username or Password wrong" });
      }
  
    //   if (!user.verified) {
    //     let token = await emailToken.findOne({ userId: user._id });
    //     if (!token) {
    //       token = await new emailToken({
    //         userId: user._id,
    //         token: crypto.randomBytes(32).toString("hex"),
    //       }).save();
    //       const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
    //       await sendEmail(user.email, "Verify your Email", url);
    //     }
  
    //     return res
    //       .status(400)
    //       .json({
    //         error: "verificaion mail has been sent to your account.Please verify",
    //       });
    //   }
  
      generateTokenAndSetCookie(user._id, res);
  
      res.status(201).json({
        _id: user._id,
        fullname: user.fullname,
        mobile:user.mobile,
        email: user.email,
        username: user.username,
        profileImg: user.profileImg,
      });
    } catch (error) {
      console.log("Error in Login controller", error);
      res.status(500).json({ error: "Internal Server Error:" });
    }
  };
  
export const logout = async (req, res) => {
    try {
      res.cookie("jwt", "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      });
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.log("Error in Logout controller", error);
      res.status(500).json({ error: "Internal Server Error:" });
    }
  };
  
  export const authCheck = async (req,res) => {

    try{
      const user=req.user;
      return res.status(200).json(user);
    }catch(error){
      console.log("Error in authCheck Controller",error.message);
      res.status(500).json({error: "Internal Server Error"});
    }
  }