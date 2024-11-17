import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css'; 

const SpecializeDetail = () => {
  const { id, email } = useParams();
  const [specialization, setSpecialization] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/specialize/${id}/${email}`)
      .then((response) => setSpecialization(response.data))
      .catch((error) => console.error(error));
  }, [id, email]);

  if (!specialization) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Specialization Details</h2>
      <p>
        <strong>Disease Type ID:</strong> {specialization.id}
      </p>
      <p>
        <strong>Doctor Email:</strong> {specialization.email}
      </p>
    </div>
  );
};

export default SpecializeDetail;
