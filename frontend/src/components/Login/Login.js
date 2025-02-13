import React, { useState, useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './../../utils/Loader/Loader';
import Alert from '@mui/material/Alert';
import { UserContext } from '../../context/UserContext';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from '@mui/material/Button';
import './Login.css';

function Login() {
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { setUser } = useContext(UserContext);

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = formData;
        const url = process.env.REACT_APP_BACKEND_URL;
        
        try {
            setLoader(true);
            const { data } = await axios.post(
                `${url}/api/auth/login`,
                { username, password },
                { withCredentials: true }
            );
 
            setUser(data);  
            
           
            navigate('/');

            setLoader(false);
        } catch (error) {
            setLoader(false);
            
            if (error.response) {
                setError(error.response.data.error || 'An error occurred during login.');
            } else {
                setError('Something went wrong');
            }
        }
    };

    return (
        <div className="login-container">
                <button
                className="back-button"
                onClick={() => navigate(-1)} 
                >
                <ArrowBackIcon />
                </button>

            <div className="login-box">
            <h2>Welcome to eGovConnect</h2>
                {loader && <Loader />}
                {error && <Alert severity="error">{error}</Alert>}
            <div className='login-main-container'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            id="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}
                            // placeholder='username'
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            // placeholder='password'
                            required
                        />
                    </div>
                   <div className='login-button-container'>
                    <Button 
                    variant="contained" 
                    type="submit" 
                    style={{ padding: '0px 35px' }}>Login</Button>
                    <Link to="/signup"><Button variant="outlined">Register</Button></Link>
                    </div>
                    {/* <div className="login-footer">
                        <p><a href="/forget">Forgot Password?</a></p>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div> */}
                </form>

                    <img className='login-bg-img' src='login_bg.png' />
                </div>
            </div>
        </div>
    );
}

export default Login;
