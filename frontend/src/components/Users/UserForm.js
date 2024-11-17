import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import './UserForm.css';

const UserForm = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    name: '',
    surname: '',
    salary: '',
    phone: '',
    cname: '',
  });

  useEffect(() => {
    if (email) {
      axios.get(`${API_BASE_URL}/users/${email}`)
        .then(response => setUser(response.data))
        .catch(error => console.error(error));
    }
  }, [email]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios.put(`${API_BASE_URL}/users/${email}`, user)
        .then(() => navigate('/users'))
        .catch(error => console.error(error));
    } else {
      axios.post(`${API_BASE_URL}/users`, user)
        .then(() => navigate('/users'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h2>{email ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        {!email && (
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} required />
          </div>
        )}
        <div>
          <label>Name:</label>
          <input name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Surname:</label>
          <input name="surname" value={user.surname} onChange={handleChange} required />
        </div>
        <div>
          <label>Salary:</label>
          <input type="number" name="salary" value={user.salary} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input name="phone" value={user.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Country:</label>
          <input name="cname" value={user.cname} onChange={handleChange} />
        </div>
        <button type="submit">{email ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default UserForm;
