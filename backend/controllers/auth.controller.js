import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/User.js";
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import UserFiles from '../models/UserFiles.js';

export const signup = async (req, res) => {
    try {
          const {username,fullname,email,mobile,password}=req.body;

      const emailRegex = new RegExp(
        "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
      );
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email" });
      }
  
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: "Username already taken" });
      }
      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: "Email already taken" });
      }
  
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        fullname: fullname,
        email: email,
        username: username,
        password: hashedPassword,
        mobile:mobile,
      });
  
      if (newUser) {
        await newUser.save();
        // const token = await new emailToken({
        //   userId: newUser._id,
        //   token: crypto.randomBytes(32).toString("hex"),
        // }).save();
  
        // const url = `${process.env.BASE_URL}users/${newUser._id}/verify/${token.token}`;
        // await sendEmail(newUser.email, "Verify Email", url);
  
        // console.log("Email sent Successfully");
        generateTokenAndSetCookie(newUser._id,res)

        res.status(201).json({
            _id:newUser._id,
            fullnamename:newUser.fullname,
            email:newUser.email,
            mobile:newUser.mobile,
            username:newUser.username,
            profileImg:newUser.profileImg,
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
      const user = await User.findOne({ username });
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

export const updateProfile = async (req,res) =>{
  try {
    const { userId, fullname, username, mobile, email, address, facebook, linkedin, twitter } = req.body;
    console.log("entered");
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.fullname = fullname || user.fullname;
    user.username = username || user.username;
    user.mobile = mobile || user.mobile;
    user.email = email || user.email;
    user.address = address || user.address;
    user.facebook = facebook || user.facebook;
    user.linkedin = linkedin || user.linkedin;
    user.twitter = twitter || user.twitter;
    console.log("detailes updated");
    console.log(req.files);

    if (req.files?.profileImg) {
      const profileResult = await uploadOnCloudinary(req.files.profileImg[0].path);

      const newProfileImage = new UserFiles({
        userId: userId,
        fileName: req.files.profileImg[0].originalname,
        fileURL: profileResult.url,
      });
      await newProfileImage.save();
      console.log("profilesaved");
      user.profileImg = profileResult.url; 
    }

    if (req.files?.coverImg) {
      const coverResult = await uploadOnCloudinary(req.files.coverImg[0].path);

      const newCoverImage = new UserFiles({
        userId: userId,
        fileName: req.files.coverImg[0].originalname,
        fileURL: coverResult.url,
      });
      await newCoverImage.save();
      console.log("cover saved");
      if (user.coverImg) {
        const oldCoverPublicId = user.coverImg.split('/').pop().split('.')[0];
        await cloudinary.v2.uploader.destroy(oldCoverPublicId);
      }

      user.coverImg = coverResult.url; 
    }

    await user.save();

    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Failed to update profile', error });
  }
}
  
  export const authCheck = async (req,res) => {

    try{
      const user=req.user;
      return res.status(200).json(user);
    }catch(error){
      console.log("Error in authCheck Controller",error.message);
      res.status(500).json({error: "Internal Server Error"});
    }
  }