import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css';

const DiseaseTypeDetail = () => {
  const { id } = useParams();
  const [diseaseType, setDiseaseType] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/diseasetype/${id}`)
      .then((response) => setDiseaseType(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!diseaseType) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Disease Type Details</h2>
      <p>
        <strong>ID:</strong> {diseaseType.id}
      </p>
      <p>
        <strong>Description:</strong> {diseaseType.description}
      </p>
    </div>
  );
};

export default DiseaseTypeDetail;
