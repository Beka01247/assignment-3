import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css'; 

const RecordForm = () => {
  const { email, cname, disease_code } = useParams();
  const navigate = useNavigate();

  const [record, setRecord] = useState({
    email: '',
    cname: '',
    disease_code: '',
    total_deaths: '',
    total_patients: '',
  });

  useEffect(() => {
    if (email && cname && disease_code) {
      axios
        .get(`${API_BASE_URL}/records/${email}/${cname}/${disease_code}`)
        .then((response) => setRecord(response.data))
        .catch((error) => console.error(error));
    }
  }, [email, cname, disease_code]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && cname && disease_code) {
      axios
        .put(`${API_BASE_URL}/records/${email}/${cname}/${disease_code}`, record)
        .then(() => navigate('/records'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/records`, record)
        .then(() => navigate('/records'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{email && cname && disease_code ? 'Edit Record' : 'Add New Record'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={record.email}
            onChange={handleChange}
            required
            disabled={!!(email && cname && disease_code)} 
          />
        </div>
        <div>
          <label>Country Name (Cname):</label>
          <input
            type="text"
            name="cname"
            value={record.cname}
            onChange={handleChange}
            required
            disabled={!!(email && cname && disease_code)} 
          />
        </div>
        <div>
          <label>Disease Code:</label>
          <input
            type="text"
            name="disease_code"
            value={record.disease_code}
            onChange={handleChange}
            required
            disabled={!!(email && cname && disease_code)} 
          />
        </div>
        <div>
          <label>Total Deaths:</label>
          <input
            type="number"
            name="total_deaths"
            value={record.total_deaths}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Total Patients:</label>
          <input
            type="number"
            name="total_patients"
            value={record.total_patients}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{email && cname && disease_code ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default RecordForm;
