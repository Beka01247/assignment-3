import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css';

const DiseaseForm = () => {
  const { disease_code } = useParams();
  const navigate = useNavigate();

  const [disease, setDisease] = useState({
    disease_code: '',
    pathogen: '',
    description: '',
    id: '',
  });

  useEffect(() => {
    if (disease_code) {
      axios
        .get(`${API_BASE_URL}/diseases/${disease_code}`)
        .then((response) => setDisease(response.data))
        .catch((error) => console.error(error));
    }
  }, [disease_code]);

  const handleChange = (e) => {
    setDisease({ ...disease, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (disease_code) {
      axios
        .put(`${API_BASE_URL}/diseases/${disease_code}`, disease)
        .then(() => navigate('/disease'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/diseases`, disease)
        .then(() => navigate('/disease'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{disease_code ? 'Edit Disease' : 'Add New Disease'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Disease Code:</label>
          <input
            type="text"
            name="disease_code"
            value={disease.disease_code}
            onChange={handleChange}
            required
            disabled={!!disease_code}
          />
        </div>
        <div>
          <label>Pathogen:</label>
          <input
            type="text"
            name="pathogen"
            value={disease.pathogen}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={disease.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Disease Type ID:</label>
          <input
            type="number"
            name="id"
            value={disease.id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{disease_code ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default DiseaseForm;
