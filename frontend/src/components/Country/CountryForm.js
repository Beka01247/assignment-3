import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css';

const CountryForm = () => {
  const { cname } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState({
    cname: '',
    population: '',
  });

  useEffect(() => {
    if (cname) {
      axios
        .get(`${API_BASE_URL}/countries/${cname}`)
        .then((response) => setCountry(response.data))
        .catch((error) => console.error(error));
    }
  }, [cname]);

  const handleChange = (e) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cname) {
      axios
        .put(`${API_BASE_URL}/countries/${cname}`, country)
        .then(() => navigate('/countries'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/countries`, country)
        .then(() => navigate('/countries'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{cname ? 'Edit Country' : 'Add New Country'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Country Name:</label>
          <input
            type="text"
            name="cname"
            value={country.cname}
            onChange={handleChange}
            required
            disabled={!!cname}
          />
        </div>
        <div>
          <label>Population:</label>
          <input
            type="number"
            name="population"
            value={country.population}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{cname ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CountryForm;
