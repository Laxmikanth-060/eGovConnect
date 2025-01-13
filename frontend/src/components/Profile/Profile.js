import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { UserContext } from './../../context/UserContext';
import Loader from "../../utils/Loader/Loader";
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

function Profile() {
  const { user } = useContext(UserContext);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(true);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]; 
    if (!file) return; 

    const formData = new FormData();
    formData.append('file', file); 
    formData.append('userId', user._id);

    try {
      setUploading(true);
      const url = process.env.REACT_APP_BACKEND_URL;
           await axios.post(`${url}/api/file/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
      fetchFiles(); 
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    } finally {
      setUploading(false); 
    }
  };

  const fetchFiles = async () => { 
    try {
        const url = process.env.REACT_APP_BACKEND_URL;
        const response = await axios.get(`${url}/api/file/${user._id}/getfiles`);
        setFiles(response.data); 
        setLoadingFiles(false); 
    } catch (error) {
        console.error('Error fetching files:', error);
        setLoadingFiles(false); 
    }finally{
      setLoadingFiles(false)
    }
  };

  useEffect(() => {
    fetchFiles(); 
  },[user,loadingFiles]); 

  if (!user) {
    return (<Loader />);
  }

  if (loadingFiles) {
    return <Loader />;
  }


  return (
    <div className="user-profile-parent-container">
      {!user && <Loader/>}
      <div className="userProfileImg-container">
        <img 
          src={user.coverImg ? user.coverImg : "profile_bg.png"} 
          alt="profile_cover_page"  
          className="userProfileImg-container"
        />
      </div>

      <div className="user-profileInfo-container">
        <Avatar
          alt="UserProfileImg" 
          src={user.profileImg} 
          sx={{
            width: 190,    
            height: 190,   
            marginLeft: 8, 
            marginRight: 2,
            marginTop: -9,  
            marginBottom: 1,
          }}
        />
        <div className="user-profileInfo-inner-container">
          <div className="user-profile-data">
            <h2>{user.fullname}</h2>
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
            <h2>{user.mobile}</h2>
            <h2>{user.address}</h2>
          </div>
          <div className="user-profileInfo-update-container">
            <div className="user-profile-social-icons">
              <a href={user.facebook} target='_blank' rel="noopener noreferrer"><img src="facebook.png" alt="Facebook" /></a>
              <a href={user.twitter} target='_blank' rel="noopener noreferrer"><img src="twitter.png" alt="Twitter" /></a>
              <a href={user.linkedin} target='_blank' rel="noopener noreferrer"><img src="linkedin.png" alt="LinkedIn" /></a>
            </div>
            <Link to="/profile/update"><Button 
              variant="contained" 
              size="small"
              sx={{
                width: 130,    
                height: 28,   
              }}
            >
              Edit Profile 
            </Button></Link>
          </div>
        </div>
      </div>
      
      <div className='profile-files-parent-container'>

        <Divider 
            textAlign="center"
            sx={{
              marginTop: '5px', 
              marginBottom: '40px', 
            }}
          
            >
          <Chip
            sx={{
              fontWeight: 'bold', 
              fontSize: '18px', 
              padding: '20px 20px',
            }}
            label="Uploaded Documents" 
            size="small" 
          />
        </Divider>

        {files.length === 0 ? (
  <p style={{textAlign:"center"}}>No files uploaded yet.</p>
) : (
  <ImageList sx={{ width: '100%', height: 'auto' }} cols={4} gap={25}>
    {files.map(file => (
      <ImageListItem 
        key={file._id} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        {file.fileName.match(/\.(jpeg|jpg|png)$/) && (
          <img
            src={file.fileURL}
            alt={file.fileName}
            loading="lazy"
            style={{ 
              maxWidth: '250px', 
              maxHeight: '200px', 
              objectFit: 'contain', 
              borderRadius: '20%' 
            }}
          />
        )}
        {file.fileName.match(/\.pdf$/) && (
          <embed
            src={file.fileURL}
            type="application/pdf"
            width="300"
            height="200"
            style={{
              borderRadius: '10px', 
              overflow: 'hidden'
            }}
          />
        )}

        <ImageListItemBar
          title={file.fileName}
          sx={{
            borderRadius: '13px', 
            backgroundColor: 'rgba(0, 0, 0, 0.4)', 
            overflow: 'hidden',
          }}
          actionIcon={
            <IconButton
              sx={{ 
                color: 'rgba(255, 255, 255, 0.54)', 
              }}
              aria-label={`info about ${file.fileName}`}
            >
              {/* <InfoIcon /> */}
            </IconButton>
          }
        />
      </ImageListItem>
    ))}
  </ImageList>
)}

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
        {uploading ? 'Uploading...' : 'Upload files'}

        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileUpload}
        />
      </Button>
      </div>

      </div>
    </div>
  );
}

export default Profile;
