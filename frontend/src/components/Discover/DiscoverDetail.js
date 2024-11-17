import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css';

const DiscoverDetail = () => {
  const { cname, disease_code } = useParams();
  const [discovery, setDiscovery] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/discover/${cname}/${disease_code}`)
      .then((response) => setDiscovery(response.data))
      .catch((error) => console.error(error));
  }, [cname, disease_code]);

  if (!discovery) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Discovery Details</h2>
      <p>
        <strong>Country Name:</strong> {discovery.cname}
      </p>
      <p>
        <strong>Disease Code:</strong> {discovery.disease_code}
      </p>
      <p>
        <strong>First Encounter Date:</strong> {discovery.first_enc_date || 'Unknown'}
      </p>
    </div>
  );
};

export default DiscoverDetail;
