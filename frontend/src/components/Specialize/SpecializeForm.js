import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css'; 

const SpecializeForm = () => {
  const { id, email } = useParams();
  const navigate = useNavigate();

  const [specialization, setSpecialization] = useState({
    id: '',
    email: '',
  });

  useEffect(() => {
    if (id && email) {
      axios
        .get(`${API_BASE_URL}/specialize/${id}/${email}`)
        .then((response) => setSpecialization(response.data))
        .catch((error) => console.error(error));
    }
  }, [id, email]);

  const handleChange = (e) => {
    setSpecialization({ ...specialization, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && email) {
      axios
        .put(`${API_BASE_URL}/specialize/${id}/${email}`, specialization)
        .then(() => navigate('/specialize'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/specialize`, specialization)
        .then(() => navigate('/specialize'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{id && email ? 'Edit Specialization' : 'Add New Specialization'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Disease Type ID:</label>
          <input
            type="number"
            name="id"
            value={specialization.id}
            onChange={handleChange}
            required
            disabled={!!(id && email)} 
          />
        </div>
        <div>
          <label>Doctor Email:</label>
          <input
            type="email"
            name="email"
            value={specialization.email}
            onChange={handleChange}
            required
            disabled={!!(id && email)} 
          />
        </div>
        <button type="submit">{id && email ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default SpecializeForm;
