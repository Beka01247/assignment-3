import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css'; 

const PublicServantList = () => {
  const [publicServants, setPublicServants] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/public-servants`)
      .then((response) => setPublicServants(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deletePublicServant = (email) => {
    axios
      .delete(`${API_BASE_URL}/public-servants/${email}`)
      .then(() =>
        setPublicServants(publicServants.filter((servant) => servant.email !== email))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Public Servants</h2>
      <Link to="/public-servants/new" className="add-user-link">
        Add New Public Servant
      </Link>
      <ul>
        {publicServants.map((servant) => (
          <li key={servant.email}>
            <div className="user-info">
              <strong>Email: {servant.email}</strong>
              <p>Department: {servant.department || 'Unknown'}</p>
            </div>
            <div className="actions">
              <Link to={`/public-servants/${servant.email}`}>View</Link>
              <Link to={`/public-servants/${servant.email}/edit`}>Edit</Link>
              <button onClick={() => deletePublicServant(servant.email)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicServantList;
