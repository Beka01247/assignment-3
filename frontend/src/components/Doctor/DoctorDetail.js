import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css'; 

const DoctorDetail = () => {
  const { email } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/doctors/${email}`)
      .then((response) => setDoctor(response.data))
      .catch((error) => console.error(error));
  }, [email]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Doctor Details</h2>
      <p>
        <strong>Email:</strong> {doctor.email}
      </p>
      <p>
        <strong>Degree:</strong> {doctor.degree || 'Unknown'}
      </p>
    </div>
  );
};

export default DoctorDetail;
