import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UsersList.css';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/countries`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteCountry = (cname) => {
    axios
      .delete(`${API_BASE_URL}/countries/${cname}`)
      .then(() => setCountries(countries.filter((country) => country.cname !== cname)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Countries</h2>
      <Link to="/countries/new" className="add-user-link">
        Add New Country
      </Link>
      <ul>
        {countries.map((country) => (
          <li key={country.cname}>
            <div className="user-info">
              <strong>{country.cname} - Population: {country.population || 'Unknown'}</strong>
            </div>
            <div className="actions">
              <Link to={`/countries/${country.cname}`}>View</Link>
              <Link to={`/countries/${country.cname}/edit`}>Edit</Link>
              <button onClick={() => deleteCountry(country.cname)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
