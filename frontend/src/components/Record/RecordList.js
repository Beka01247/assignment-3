import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css'; 

const RecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/records`)
      .then((response) => setRecords(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteRecord = (email, cname, disease_code) => {
    axios
      .delete(`${API_BASE_URL}/records/${email}/${cname}/${disease_code}`)
      .then(() =>
        setRecords(
          records.filter(
            (record) =>
              record.email !== email ||
              record.cname !== cname ||
              record.disease_code !== disease_code
          )
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Records</h2>
      <Link to="/records/new" className="add-user-link">
        Add New Record
      </Link>
      <ul>
        {records.map((record) => (
          <li key={`${record.email}-${record.cname}-${record.disease_code}`}>
            <div className="user-info">
              <strong>
                Email: {record.email} | Country: {record.cname} | Disease: {record.disease_code}
              </strong>
              <p>Total Deaths: {record.total_deaths || 'N/A'} | Total Patients: {record.total_patients || 'N/A'}</p>
            </div>
            <div className="actions">
              <Link to={`/records/${record.email}/${record.cname}/${record.disease_code}`}>View</Link>
              <Link to={`/records/${record.email}/${record.cname}/${record.disease_code}/edit`}>
                Edit
              </Link>
              <button
                onClick={() => deleteRecord(record.email, record.cname, record.disease_code)}
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

export default RecordList;
