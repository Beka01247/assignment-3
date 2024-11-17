import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css'; 

const DoctorForm = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    email: '',
    degree: '',
  });

  useEffect(() => {
    if (email) {
      axios
        .get(`${API_BASE_URL}/doctors/${email}`)
        .then((response) => setDoctor(response.data))
        .catch((error) => console.error(error));
    }
  }, [email]);

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .put(`${API_BASE_URL}/doctors/${email}`, doctor)
        .then(() => navigate('/doctors'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/doctors`, doctor)
        .then(() => navigate('/doctors'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{email ? 'Edit Doctor' : 'Add New Doctor'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            required
            disabled={!!email} 
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={doctor.degree}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{email ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default DoctorForm;
