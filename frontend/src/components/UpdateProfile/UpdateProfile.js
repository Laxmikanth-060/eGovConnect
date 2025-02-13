import React,{useContext,useState,useEffect} from 'react'
import './UpdateProfile.css'
import axios from 'axios';
import {TextField } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { UserContext } from './../../context/UserContext';
import Loader from "../../utils/Loader/Loader";


function UpdateProfile() {


    const { user } = useContext(UserContext);

    const [fullname,setFullname]=useState(user.fullname);
    const [username,setUsername]=useState(user.username);
    const [mobile,setMobile]=useState(user.mobile);
    const [address,setAddress]=useState(user.address);
    const [coverImg,setCoverImg]=useState("");
    const [profileImg,setProfileImg]=useState("");
    const [facebook,setFacebook]=useState(user.facebookURL);
    const [linkedin,setLinkedin]=useState(user.linkedinURL);
    const [twitter,setTwitter]=useState(user.twitterURL);
    const [uploading, setUploading] = useState("Upload");
    const [loading,setLoading]=useState(false);

    const url =process.env.REACT_APP_BACKEND_URL;
    
    const submitHandler=async(e)=>{

        e.preventDefault();

        try{
            setLoading(true);
          const formData = new FormData();
        formData.append("userId",user._id);
        formData.append('fullname', fullname);
        formData.append('username', username);
        formData.append('mobile', mobile);
        formData.append('address', address);
        formData.append('facebook', facebook);
        formData.append('linkedin', linkedin);
        formData.append('twitter', twitter);

        if (coverImg) formData.append('coverImg', coverImg);
        if (profileImg) formData.append('profileImg', profileImg);

        const res = await axios.post(`${url}/api/auth/profile/update`, formData,{
          headers: {
              'Content-Type': 'multipart/form-data',
          },
      } );

        if(res.data.message==="profile updated Successfully")
        alert(`Dear, ${fullname}, Your Profile updated Successfully`);
    
        }catch(err){
          console.log(err);
          alert("Error in the server while updating");
        }finally{
          setLoading(false);
        }
    }


    const submitCoverImg = (event) => {
      setUploading("Uploading..");
      const selectedFile = event.target.files[0];
    
      if (selectedFile) {
        setCoverImg(selectedFile); 
      }
      setUploading("Uploaded"); 

    };
    
    const submitProfileImg = (event) => {
      setUploading("Uploading..");
      const selectedFile = event.target.files[0];
    
      if (selectedFile) {
        setProfileImg(selectedFile); 
      } 
      setUploading("Uploaded"); 

    };
    
    useEffect(()=>{
      setUploading("Upload");
    })

    if (!user) {
      return (<Loader />);
    }

  return (

    <div className='profile-update-parent-container'>

      <h1 className='profile-update-title'>Profile Update</h1>
      {
        loading && <Loader/>
      }
    <form onSubmit={submitHandler}>
      <div className='profile-update-inner-container'>

       <div className='profile-update-main-container'>
        <p>Name </p>
        <TextField 
       type="text"
       placeholder="Name of the Service"
       value={fullname}
       onChange={(e) => setFullname(e.target.value)}
       label="Name" variant="outlined"
       sx={{ width: "350px" }}
      /></div>
 
        <div className='profile-update-main-container'>
        <p>Username </p>
            <TextField 
            type="text"
            placeholder="Description of the Service"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username" variant="outlined"
            sx={{ width: "350px" }}
                /></div>

        <div className='profile-update-main-container'>
        <p>Mobile </p>
        <TextField 
            type="text"
            placeholder="Concerned Depatment Name"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            label="Mobile" variant="outlined"
            sx={{ width: "350px" }}
            /></div>

        {/* <div className='profile-update-main-container'>
        <p>Email </p>
        <TextField 
                type="text"
                placeholder="Documents Required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            label="Email" variant="outlined" 
            sx={{ width: "350px" }}
            InputProps={{
              readOnly: true,
            }}
            /></div> */}

        <div className='profile-update-main-container'>
        <p>Address</p>
        <TextField 
                type="text"
                placeholder="Concerned Offices"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            label="Address" variant="outlined" 
            sx={{ width: "350px" }}
            /></div>

        <div className='profile-update-main-container'>
        <p>Facebook Link</p>
        <TextField 
            type="text"
            placeholder="legal time to be taken"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            // required
            label="Facebook Link" variant="outlined" 
            sx={{ width: "350px" }}
            /></div>

        <div className='profile-update-main-container'>
            <p>Twitter Link</p>
            <TextField 
                type="text"
                placeholder="Fee Prescribed by Govt."
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                sx={{ width: "350px" }}
                label="Twitter Link" variant="outlined" /></div>
    

            <div className='profile-update-main-container'>
            <p>LinkedIn Link</p>
            <TextField 
            type="text"
            placeholder="Reference website link"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            sx={{ width: "350px" }}
            label="LinkedIn Link" variant="outlined" /></div>

        {/* <div className='profile-upload-button'>
                  <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  disabled={uploading}
                  sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width:'70%',
                  marginTop: '70px', 
                  marginBottom: '20px', 
                }}
                >
                {uploading ? 'Uploading...' : 'Upload files'}

                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={submitProfileImg}
                />
              </Button>
              </div> */}

<div className='profile-upload-button'>
          <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          disabled={uploading}
          sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width:'70%',
          marginTop: '70px', 
          marginBottom: '20px', 
        }}
        >
        {uploading ? 'Uploading...' : 'Profile Photo Update'}

        <input
          type="file"
          style={{ display: 'none' }}
          onChange={submitProfileImg}
        />
      </Button>
      </div>

      <div className='profile-upload-button'>
          <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          disabled={uploading}
          sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width:'70%',
          marginTop: '70px', 
          marginBottom: '20px', 
        }}
        >
        {uploading ? 'Uploading...' : 'Cover Photo Update'}

        <input
          type="file"
          style={{ display: 'none' }}
          onChange={submitCoverImg}
        />
      </Button>
      </div>


    </div>
    <button className='profile-update-button'>Update Profile</button>
    </form>
</div> 
  )
}

export default UpdateProfile
