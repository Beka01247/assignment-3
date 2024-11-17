import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const PatientDiseaseList = () => {
  const [patientDiseases, setPatientDiseases] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/patient-disease`)
      .then((response) => setPatientDiseases(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deletePatientDisease = (email, disease_code) => {
    axios
      .delete(`${API_BASE_URL}/patient-disease/${email}/${disease_code}`)
      .then(() =>
        setPatientDiseases(
          patientDiseases.filter(
            (relationship) =>
              relationship.email !== email || relationship.disease_code !== disease_code
          )
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Patient-Disease Relationships</h2>
      <Link to="/patient-disease/new" className="add-user-link">
        Add New Relationship
      </Link>
      <ul>
        {patientDiseases.map((relationship) => (
          <li key={`${relationship.email}-${relationship.disease_code}`}>
            <div className="user-info">
              <strong>
                Patient: {relationship.email} | Disease: {relationship.disease_code}
              </strong>
            </div>
            <div className="actions">
              <Link to={`/patient-disease/${relationship.email}/${relationship.disease_code}`}>
                View
              </Link>
              <Link
                to={`/patient-disease/${relationship.email}/${relationship.disease_code}/edit`}
              >
                Edit
              </Link>
              <button
                onClick={() =>
                  deletePatientDisease(relationship.email, relationship.disease_code)
                }
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

export default PatientDiseaseList;
