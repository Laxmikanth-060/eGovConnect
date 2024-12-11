import React, { useContext } from 'react';
import './Profile.css';
import Avatar from '@mui/material/Avatar';
import { UserContext } from './../../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <div className='userProfileImg-containerr'>
        <img 
          src='profile_cover.png' 
          alt='profile_cover_page' 
          className='userProfile-img' 
        />
      </div>
      <div>
      <Avatar
        alt="UserProfileImg" 
        src={user.profileImg} 
        sx={{
          width: 150,    
          height: 150,   
          marginLeft: 5, 
          marginRight: 2,
          marginTop: -9,  
          marginBottom: 1
        }}
      />
      </div>
    </div>
  );
}

export default Profile;
