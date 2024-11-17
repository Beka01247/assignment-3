import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css';

const PatientDetail = () => {
  const { email } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/patients/${email}`)
      .then((response) => setPatient(response.data))
      .catch((error) => console.error(error));
  }, [email]);

  if (!patient) return <div>Loading...</div>;

  return (
    <div className="patient-detail">
      <h2>Patient Details</h2>
      <p>
        <strong>Email:</strong> {patient.email}
      </p>
    </div>
  );
};

export default PatientDetail;
