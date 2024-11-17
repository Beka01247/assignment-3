import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/patients">Patients</Link></li>
      <li><Link to="/diseasetype">Disease Types</Link></li>
      <li><Link to="/countries">Countries</Link></li>
      <li><Link to="/disease">Diseases</Link></li>
      <li><Link to="/discover">Discoveries</Link></li>
      <li><Link to="/patient-disease">Patient-Disease</Link></li>
      <li><Link to="/public-servants">Public Servants</Link></li>
      <li><Link to="/doctors">Doctors</Link></li>
      <li><Link to="/specialize">Specialize</Link></li>
      <li><Link to="/records">Records</Link></li>
    </ul>
  </nav>
);

export default Navbar;
