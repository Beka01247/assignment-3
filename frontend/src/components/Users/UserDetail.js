import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import './UserDetail.css';

const UserDetail = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/users/${email}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [email]);

  if (!user) return <div>Loading...</div>;

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail">
      <h2>
        User Details: {user.name} {user.surname}
      </h2>
      <p>
        <span>Email:</span> {user.email}
      </p>
      <p>
        <span>Salary:</span> {user.salary}
      </p>
      <p>
        <span>Phone:</span> {user.phone}
      </p>
      <p>
        <span>Country:</span> {user.cname}
      </p>
    </div>
  );
};

export default UserDetail;
