import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css'; 

const PatientDiseaseForm = () => {
  const { email, disease_code } = useParams();
  const navigate = useNavigate();

  const [patientDisease, setPatientDisease] = useState({
    email: '',
    disease_code: '',
  });

  useEffect(() => {
    if (email && disease_code) {
      axios
        .get(`${API_BASE_URL}/patient-disease/${email}/${disease_code}`)
        .then((response) => setPatientDisease(response.data))
        .catch((error) => console.error(error));
    }
  }, [email, disease_code]);

  const handleChange = (e) => {
    setPatientDisease({ ...patientDisease, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && disease_code) {
      axios
        .put(`${API_BASE_URL}/patient-disease/${email}/${disease_code}`, patientDisease)
        .then(() => navigate('/patient-disease'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/patient-disease`, patientDisease)
        .then(() => navigate('/patient-disease'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>
        {email && disease_code
          ? 'Edit Patient-Disease Relationship'
          : 'Add New Patient-Disease Relationship'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Email:</label>
          <input
            type="email"
            name="email"
            value={patientDisease.email}
            onChange={handleChange}
            required
            disabled={!!(email && disease_code)} 
          />
        </div>
        <div>
          <label>Disease Code:</label>
          <input
            type="text"
            name="disease_code"
            value={patientDisease.disease_code}
            onChange={handleChange}
            required
            disabled={!!(email && disease_code)} 
          />
        </div>
        <button type="submit">{email && disease_code ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PatientDiseaseForm;
