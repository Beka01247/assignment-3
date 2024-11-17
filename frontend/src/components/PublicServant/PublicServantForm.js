import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import '../Users/UserForm.css'; 

const PublicServantForm = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [publicServant, setPublicServant] = useState({
    email: '',
    department: '',
  });

  useEffect(() => {
    if (email) {
      axios
        .get(`${API_BASE_URL}/public-servants/${email}`)
        .then((response) => setPublicServant(response.data))
        .catch((error) => console.error(error));
    }
  }, [email]);

  const handleChange = (e) => {
    setPublicServant({ ...publicServant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      axios
        .put(`${API_BASE_URL}/public-servants/${email}`, publicServant)
        .then(() => navigate('/public-servants'))
        .catch((error) => console.error(error));
    } else {
      axios
        .post(`${API_BASE_URL}/public-servants`, publicServant)
        .then(() => navigate('/public-servants'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="user-form">
      <h2>{email ? 'Edit Public Servant' : 'Add New Public Servant'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={publicServant.email}
            onChange={handleChange}
            required
            disabled={!!email} 
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={publicServant.department}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{email ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PublicServantForm;
