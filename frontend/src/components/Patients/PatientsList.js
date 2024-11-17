import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/patients`)
      .then((response) => setPatients(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deletePatient = (email) => {
    axios
      .delete(`${API_BASE_URL}/patients/${email}`)
      .then(() => setPatients(patients.filter((patient) => patient.email !== email)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Patients</h2>
      <Link to="/patients/new" className="add-user-link">
        Add New Patient
      </Link>
      <ul>
        {patients.map((patient) => (
          <li key={patient.email}>
            <div className="user-info">
              <strong>{patient.email}</strong>
            </div>
            <div className="actions">
              <Link to={`/patients/${patient.email}`}>View</Link>
              <Link to={`/patients/${patient.email}/edit`}>Edit</Link>
              <button onClick={() => deletePatient(patient.email)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
