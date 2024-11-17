import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css'; 

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/doctors`)
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteDoctor = (email) => {
    axios
      .delete(`${API_BASE_URL}/doctors/${email}`)
      .then(() => setDoctors(doctors.filter((doctor) => doctor.email !== email)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Doctors</h2>
      <Link to="/doctors/new" className="add-user-link">
        Add New Doctor
      </Link>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.email}>
            <div className="user-info">
              <strong>Email: {doctor.email}</strong>
              <p>Degree: {doctor.degree || 'Unknown'}</p>
            </div>
            <div className="actions">
              <Link to={`/doctors/${doctor.email}`}>View</Link>
              <Link to={`/doctors/${doctor.email}/edit`}>Edit</Link>
              <button onClick={() => deleteDoctor(doctor.email)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
