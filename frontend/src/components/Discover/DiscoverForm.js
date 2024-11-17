import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css';

const DiscoverForm = () => {
  const { cname, disease_code } = useParams();
  const navigate = useNavigate();

  const [discovery, setDiscovery] = useState({
    cname: '',
    disease_code: '',
    first_enc_date: '',
  });

  useEffect(() => {
    if (cname && disease_code) {
      axios
        .get(`${API_BASE_URL}/discover/${cname}/${disease_code}`)
        .then((response) => setDiscovery(response.data))
        .catch((error) => console.error(error));
    }
  }, [cname, disease_code]);

  const handleChange = (e) => {
    setDiscovery({ ...discovery, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cname && disease_code) {
      axios
        .put(`${API_BASE_URL}/discover/${cname}/${disease_code}`, discovery)
        .then(() => navigate('/discover'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/discover`, discovery)
        .then(() => navigate('/discover'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{cname && disease_code ? 'Edit Discovery' : 'Add New Discovery'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Country Name (Cname):</label>
          <input
            type="text"
            name="cname"
            value={discovery.cname}
            onChange={handleChange}
            required
            disabled={!!(cname && disease_code)}
          />
        </div>
        <div>
          <label>Disease Code:</label>
          <input
            type="text"
            name="disease_code"
            value={discovery.disease_code}
            onChange={handleChange}
            required
            disabled={!!(cname && disease_code)} 
          />
        </div>
        <div>
          <label>First Encounter Date:</label>
          <input
            type="date"
            name="first_enc_date"
            value={discovery.first_enc_date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{cname && disease_code ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default DiscoverForm;
