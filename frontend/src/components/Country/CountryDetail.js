import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserDetail.css';

const CountryDetail = () => {
  const { cname } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/countries/${cname}`)
      .then((response) => setCountry(response.data))
      .catch((error) => console.error(error));
  }, [cname]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>Country Details</h2>
      <p>
        <strong>Country Name:</strong> {country.cname}
      </p>
      <p>
        <strong>Population:</strong> {country.population || 'Unknown'}
      </p>
    </div>
  );
};

export default CountryDetail;
