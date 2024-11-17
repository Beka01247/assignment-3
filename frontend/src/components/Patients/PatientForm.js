import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css';

const PatientForm = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    email: '',
  });

  useEffect(() => {
    if (email) {
      axios
        .get(`${API_BASE_URL}/patients/${email}`)
        .then((response) => setPatient(response.data))
        .catch((error) => console.error(error));
    }
  }, [email]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .put(`${API_BASE_URL}/patients/${email}`, patient)
        .then(() => navigate('/patients'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/patients`, patient)
        .then(() => navigate('/patients'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="patient-form">
      <h2>{email ? 'Edit Patient' : 'Add New Patient'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={patient.email}
            onChange={handleChange}
            required
            disabled={!!email} // Disable email field when editing
          />
        </div>
        <button type="submit">{email ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PatientForm;
