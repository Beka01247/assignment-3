import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css';

const DiseaseDetail = () => {
  const { disease_code } = useParams();
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/diseases/${disease_code}`)
      .then((response) => setDisease(response.data))
      .catch((error) => console.error(error));
  }, [disease_code]);

  if (!disease) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Disease Details</h2>
      <p>
        <strong>Disease Code:</strong> {disease.disease_code}
      </p>
      <p>
        <strong>Pathogen:</strong> {disease.pathogen || 'Unknown'}
      </p>
      <p>
        <strong>Description:</strong> {disease.description || 'No Description'}
      </p>
      <p>
        <strong>Disease Type ID:</strong> {disease.id || 'N/A'}
      </p>
    </div>
  );
};

export default DiseaseDetail;
