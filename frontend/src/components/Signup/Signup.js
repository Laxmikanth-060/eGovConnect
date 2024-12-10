import React, { useContext } from 'react'
import { useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios';
import './Signup.css'
import Alert from '@mui/material/Alert';
import Loader from './../../utils/Loader/Loader'
import {UserContext} from '../../context/UserContext'
import {TextField } from "@mui/material";

function Signup() {

  const url=process.env.REACT_APP_BACKEND_URL;

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const [showAlert,setAlert]=useState(false);
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const handleSubmit = async(e) => {
    setAlert(false);
    e.preventDefault();
   
    const { username, fullname, email, mobile, password, confirmPassword } = formData;
    console.log(username);
    const pattern = /^[0-9]{10}$/;

    if(!pattern.test(mobile)){
      setError("Invalid Mobile Number");
      setAlert(true);
      return;
    }
    if(mobile.length!==10){
      setError("Invalid Mobile number");
      setAlert(true);
      return;
    }
    if(password.length<6){
      setError("Password length should be greater than 6");
      setAlert(true);
      return;
    }
    if(password!==confirmPassword){
      setError("Password Didn't Match");
      setAlert(true);
      return;
    }

    try{
      setAlert(false);
      setLoading(true);
      const user= await axios.post(`${url}/api/auth/signup`,{
        username,
        fullname,
        email,
        mobile,
        password,
      }, { withCredentials: true });


      // const { userData } = await axios.get(`${url}/api/auth/authCheck`,{
      //   withCredentials:true,
      // });

      setUser(user);
      navigate("/");
      setLoading(false);
    }catch(error){
      if(error.response)
      {
        setError(error.response.data.error);
      }else{
        setError("An unexpected error occured.");
      }
      setLoading(false);
    }
    
  };


//   iv className="form-group">
//   <label htmlFor="username">User Name</label>
//   <input
//     type="text"
//     id="username"
//     name="username"
//     placeholder="Enter User name"
//     value={formData.username}
//     onChange={handleChange}
//     required
//   />
// </div>

  return (
    <div className="signup-parent-container">
      <div className='signup-text-container'>

      <h2 className='signup-title'>Signup</h2>
      {showAlert && <Alert severity="error"
     sx={{
      width: '50%',        
      margin: '0 auto',   
      textAlign: 'center',  
    }}
      >{error}</Alert>}
      {loading && <Loader/>}
    <form onSubmit={handleSubmit} className='signup-form'>

       <div className='post-main-container'>
        <p>Fullname </p>
        <TextField 
       type="text"
       placeholder="Fullname"
       name="fullname"
       value={formData.fullname}
       onChange={handleChange}
       required
       label="fullname" variant="outlined"
       sx={{ width: "250px" }}
      /></div>

<div className='post-main-container'>
        <p>Email</p>
        <TextField 
       type="email"
       placeholder="Email"
       name="email"
       value={formData.email}
       onChange={handleChange}
       required
       label="email" variant="outlined"
       sx={{ width: "250px" }}
      /></div>

<div className='post-main-container'>
        <p>Mobile</p>
        <TextField 
       type="text"
       placeholder="Mobile No."
       name="mobile"
       value={formData.mobile}
       onChange={handleChange}
       required
       label="mobile" variant="outlined"
       sx={{ width: "250px" }}
      /></div>

<div className='post-main-container'>
        <p>Username </p>
        <TextField 
       type="text"
       placeholder="Username"
       name="username"
       value={formData.username}
       onChange={handleChange}
       required
       label="username" variant="outlined"
       sx={{ width: "250px" }}
      /></div>
 
 <div className='post-main-container'>
        <p>Password </p>
        <TextField 
       type="password"
       placeholder="Password"
       name="password"
       value={formData.password}
       onChange={handleChange}
       required
       label="password" variant="outlined"
       sx={{ width: "250px" }}
      /></div>

<div className='post-main-container'>
        <p>Confirm Password </p>
        <TextField 
       type="password"
       placeholder="confirmpassword"
       name="confirmPassword"
       value={formData.confirmPassword}
       onChange={handleChange}
       required
       label="confirmpassword" variant="outlined"
       sx={{ width: "250px" }}
      /></div>


<Button variant="contained" style={{ margin: '25px',padding:'8px 40px' }}>Signup</Button>
    </form>

      </div>
      {/* <img className='sinupImg' src='signup.png'></img> */}
    </div>
  ) 
}

export default Signup