import React from 'react';
import { Link } from 'react-router-dom';
import './Folder.css'

const Header = () => {
  return (
    <header className='header'>
      <nav>
        
        <ul>
        <img className='image' src='https://res.cloudinary.com/dz7osr4ia/image/upload/v1719482800/OIP_2_fs0aek.jpg'/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/booking">Book An Appointment</Link></li>
          <li><Link to="/appointments"> History</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
