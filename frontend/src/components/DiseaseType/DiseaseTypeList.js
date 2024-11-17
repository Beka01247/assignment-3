import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const DiseaseTypeList = () => {
  const [diseaseTypes, setDiseaseTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/diseasetype`)
      .then((response) => setDiseaseTypes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteDiseaseType = (id) => {
    axios
      .delete(`${API_BASE_URL}/diseasetype/${id}`)
      .then(() => setDiseaseTypes(diseaseTypes.filter((diseaseType) => diseaseType.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Disease Types</h2>
      <Link to="/diseasetype/new" className="add-user-link">
        Add New Disease Type
      </Link>
      <ul>
        {diseaseTypes.map((diseaseType) => (
          <li key={diseaseType.id}>
            <div className="user-info">
              <strong>{diseaseType.id} - {diseaseType.description}</strong>
            </div>
            <div className="actions">
              <Link to={`/diseasetype/${diseaseType.id}`}>View</Link>
              <Link to={`/diseasetype/${diseaseType.id}/edit`}>Edit</Link>
              <button onClick={() => deleteDiseaseType(diseaseType.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseTypeList;
