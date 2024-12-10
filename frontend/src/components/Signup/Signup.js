import React, { useContext } from 'react'
import { useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Signup.css'
import Alert from '@mui/material/Alert';
import Loader from './../../utils/Loader/Loader'
import {UserContext} from '../../context/UserContext'

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

      console.log(user);

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



  return (
    <div className="signup-parent-container">
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
        {showAlert && <Alert severity="error">{error}</Alert>}
        {loading && <Loader/>}
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter User name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>

    </div>
  )
}

export default Signup