import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css'; 

const SpecializeList = () => {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/specialize`)
      .then((response) => setSpecializations(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteSpecialization = (id, email) => {
    axios
      .delete(`${API_BASE_URL}/specialize/${id}/${email}`)
      .then(() =>
        setSpecializations(
          specializations.filter(
            (specialization) => specialization.id !== id || specialization.email !== email
          )
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Specializations</h2>
      <Link to="/specialize/new" className="add-user-link">
        Add New Specialization
      </Link>
      <ul>
        {specializations.map((specialization) => (
          <li key={`${specialization.id}-${specialization.email}`}>
            <div className="user-info">
              <strong>
                Disease Type ID: {specialization.id} | Doctor Email: {specialization.email}
              </strong>
            </div>
            <div className="actions">
              <Link to={`/specialize/${specialization.id}/${specialization.email}`}>View</Link>
              <Link to={`/specialize/${specialization.id}/${specialization.email}/edit`}>
                Edit
              </Link>
              <button onClick={() => deleteSpecialization(specialization.id, specialization.email)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecializeList;
