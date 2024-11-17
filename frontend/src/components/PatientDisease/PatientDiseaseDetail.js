import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css'; 

const PatientDiseaseDetail = () => {
  const { email, disease_code } = useParams();
  const [patientDisease, setPatientDisease] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/patient-disease/${email}/${disease_code}`)
      .then((response) => setPatientDisease(response.data))
      .catch((error) => console.error(error));
  }, [email, disease_code]);

  if (!patientDisease) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Patient-Disease Relationship Details</h2>
      <p>
        <strong>Patient Email:</strong> {patientDisease.email}
      </p>
      <p>
        <strong>Disease Code:</strong> {patientDisease.disease_code}
      </p>
    </div>
  );
};

export default PatientDiseaseDetail;
