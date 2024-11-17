import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const DiscoverList = () => {
  const [discoveries, setDiscoveries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/discover`)
      .then((response) => setDiscoveries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteDiscover = (cname, disease_code) => {
    axios
      .delete(`${API_BASE_URL}/discover/${cname}/${disease_code}`)
      .then(() =>
        setDiscoveries(
          discoveries.filter(
            (discovery) => discovery.cname !== cname || discovery.disease_code !== disease_code
          )
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Discoveries</h2>
      <Link to="/discover/new" className="add-user-link">
        Add New Discovery
      </Link>
      <ul>
        {discoveries.map((discovery) => (
          <li key={`${discovery.cname}-${discovery.disease_code}`}>
            <div className="user-info">
              <strong>
                Country: {discovery.cname} | Disease: {discovery.disease_code}
              </strong>
              <p>First Encounter Date: {discovery.first_enc_date || 'Unknown'}</p>
            </div>
            <div className="actions">
              <Link to={`/discover/${discovery.cname}/${discovery.disease_code}`}>View</Link>
              <Link to={`/discover/${discovery.cname}/${discovery.disease_code}/edit`}>Edit</Link>
              <button
                onClick={() => deleteDiscover(discovery.cname, discovery.disease_code)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscoverList;
