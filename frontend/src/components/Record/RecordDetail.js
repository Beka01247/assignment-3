import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css'; 

const RecordDetail = () => {
  const { email, cname, disease_code } = useParams();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/records/${email}/${cname}/${disease_code}`)
      .then((response) => setRecord(response.data))
      .catch((error) => console.error(error));
  }, [email, cname, disease_code]);

  if (!record) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Record Details</h2>
      <p>
        <strong>Email:</strong> {record.email}
      </p>
      <p>
        <strong>Country:</strong> {record.cname}
      </p>
      <p>
        <strong>Disease Code:</strong> {record.disease_code}
      </p>
      <p>
        <strong>Total Deaths:</strong> {record.total_deaths || 'N/A'}
      </p>
      <p>
        <strong>Total Patients:</strong> {record.total_patients || 'N/A'}
      </p>
    </div>
  );
};

export default RecordDetail;
