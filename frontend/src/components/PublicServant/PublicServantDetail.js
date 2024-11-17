import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css'; 

const PublicServantDetail = () => {
  const { email } = useParams();
  const [publicServant, setPublicServant] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/public-servants/${email}`)
      .then((response) => setPublicServant(response.data))
      .catch((error) => console.error(error));
  }, [email]);

  if (!publicServant) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Public Servant Details</h2>
      <p>
        <strong>Email:</strong> {publicServant.email}
      </p>
      <p>
        <strong>Department:</strong> {publicServant.department || 'Unknown'}
      </p>
    </div>
  );
};

export default PublicServantDetail;
