import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const DiseaseList = () => {
  const [diseases, setDiseases] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/diseases`)
      .then((response) => setDiseases(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteDisease = (disease_code) => {
    axios
      .delete(`${API_BASE_URL}/disease/${disease_code}`)
      .then(() => setDiseases(diseases.filter((disease) => disease.disease_code !== disease_code)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Diseases</h2>
      <Link to="/disease/new" className="add-user-link">
        Add New Disease
      </Link>
      <ul>
        {diseases.map((disease) => (
          <li key={disease.disease_code}>
            <div className="user-info">
              <strong>
                {disease.disease_code} - {disease.pathogen || 'Unknown Pathogen'}
              </strong>
            </div>
            <div className="actions">
              <Link to={`/disease/${disease.disease_code}`}>View</Link>
              <Link to={`/disease/${disease.disease_code}/edit`}>Edit</Link>
              <button onClick={() => deleteDisease(disease.disease_code)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseList;
