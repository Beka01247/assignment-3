import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css';

const DiseaseTypeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [diseaseType, setDiseaseType] = useState({
    id: '',
    description: '',
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${API_BASE_URL}/diseasetype/${id}`)
        .then((response) => setDiseaseType(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    setDiseaseType({ ...diseaseType, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios
        .put(`${API_BASE_URL}/diseasetype/${id}`, diseaseType)
        .then(() => navigate('/diseasetype'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/diseasetype`, diseaseType)
        .then(() => navigate('/diseasetype'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{id ? 'Edit Disease Type' : 'Add New Disease Type'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={diseaseType.id}
            onChange={handleChange}
            required
            disabled={!!id} 
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={diseaseType.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default DiseaseTypeForm;
