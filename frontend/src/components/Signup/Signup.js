import React, { useContext } from 'react'
import { useState} from 'react';
import {useNavigate,Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios';
import './Signup.css'
import Alert from '@mui/material/Alert';
import Loader from './../../utils/Loader/Loader'
import {UserContext} from '../../context/UserContext'
import {TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    console.log(formData);
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
      const user= await axios.post(`${url}/api/auth/user/signup`,{
        username,
        fullname,
        email,
        mobile,
        password,
      }, { withCredentials: true });


      const { userData } = await axios.get(`${url}/api/auth/user/authCheck`,{
        withCredentials:true,
      });

      setUser(user);
      navigate("/");
      setLoading(false);
    }catch(error){
      if(error.response)
      {
        setError(error.response.data.error);
        setAlert(true);
      }else{
        setError("An unexpected error occured.");
      }
      setLoading(false);
    }
    
  };

  return (
    <div className="signup-parent-container">
       <button
            className="back-button"
            onClick={() => navigate(-1)} // Navigate back to the previous page
            >
            <ArrowBackIcon />
        </button>
        <h2 className='signup-title'>Signup</h2>
            {showAlert && <Alert severity="error"
          sx={{
            width: '50%',        
            margin: '0 auto',   
            textAlign: 'center',  
          }}
            >{error}</Alert>}
            {loading && <Loader/>}

        <div className='signup-text-container'>
            <form onSubmit={handleSubmit} className='signup-form'>

              <div className='signup-section-container'>
                      <p>Fullname </p>
                      <TextField 
                      type="text"
                      placeholder="Fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      label="fullname" variant="outlined"
                      size="small"
                      InputProps={{
                        sx: {
                          width: "250px", 
                          height: "46px", 
                          padding: "0",   
                        },
                      }}/>
                    </div>

                  <div className='signup-section-container'>
                      <p>Email</p>
                      <TextField 
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      label="email" variant="outlined"
                      size="small"
                      InputProps={{
                        sx: {
                          width: "250px", 
                          height: "46px", 
                          padding: "0",   
                        },
                      }}/>
                    </div>

                  <div className='signup-section-container'>
                      <p>Mobile</p>
                      <TextField 
                      type="text"
                      placeholder="Mobile No."
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      label="mobile" variant="outlined"
                      size="small"
                      InputProps={{
                        sx: {
                          width: "250px", 
                          height: "46px", 
                          padding: "0",   
                        },
                      }}/>
                  </div>

                  <div className='signup-section-container'>
                          <p>Username </p>
                          <TextField 
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                        label="username" variant="outlined"
                        size="small"
                        InputProps={{
                          sx: {
                            width: "250px", 
                            height: "46px", 
                            padding: "0",   
                          },
                        }}/>
                      </div>
        
                      <div className='signup-section-container'>
                              <p>Password </p>
                              <TextField 
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            label="password" variant="outlined"
                            size="small"
                            InputProps={{
                              sx: {
                                width: "250px", 
                                height: "46px", 
                                padding: "0",   
                              },
                            }}/>
                            </div>

                        <div className='signup-section-container'>
                                <p>Confirm Password </p>
                                <TextField 
                              type="password"
                              placeholder="confirmpassword"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                              label="confirm password" variant="outlined"
                              size="small"
                              InputProps={{
                                sx: {
                                  width: "250px", 
                                  height: "46px", 
                                  padding: "5px",   
                                },
                              }}/>
                            </div>


                            <div className='signup-button-container'>
                            <Button 
                            sx={{
                              height: '37px',
                              // fontSize: '12px',
                              padding: '12px 25px',
                            }}
                            type='submit' variant="contained" >SignUp</Button>
                            <Link to="/login"><Button variant="outlined">Login</Button></Link>
                            </div>
                  </form>
              <div className='signup-img-div' >    
                  <img className='signupImg' src='signup.png'></img>
              </div>
          </div>
      
    </div>
  ) 
}

export default Signup