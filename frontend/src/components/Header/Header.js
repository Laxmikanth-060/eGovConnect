import React, { useState, useContext, useEffect, useRef } from 'react';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';

function Header() {
  const userInfo = useContext(UserContext);
  const { user, setUser } = userInfo;
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const url = process.env.REACT_APP_BACKEND_URL;

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${url}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='header-parent'>
      <div>
        <img id='logo' src='logo.png' alt='logo' />
      </div>
      <div className='nav-items'>
        {user ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/services'
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/about'
            >
              About Us
            </NavLink>
            <img
              src={user.profileImg}
              alt='Profile'
              className='profileImg'
              onClick={toggleDropdown}
              ref={dropdownRef}
            />
            {isDropdownOpen && (
              <div className='dropdownMenu' ref={dropdownRef}>
                <div>
                  <NavLink className='dropdownItem' to='/profile'>
                    My Profile
                  </NavLink>
                </div>
                <div>
                  <span className='dropdownItem' onClick={handleLogout}>
                    Log out
                  </span>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/services'
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/about'
            >
              About Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              to='/login'
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
