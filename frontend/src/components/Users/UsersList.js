import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const deleteUser = (email) => {
    axios
      .delete(`${API_BASE_URL}/users/${email}`)
      .then(() => setUsers(users.filter((user) => user.email !== email)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="users-list">
      <h2>Users</h2>
      <Link to="/users/new" className="add-user-link">
        Add New User
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <div className="user-info">
              <strong>
                {user.name} {user.surname}
              </strong>{' '}
              ({user.email})
            </div>
            <div className="actions">
              <Link to={`/users/${user.email}`}>View</Link>
              <Link to={`/users/${user.email}/edit`}>Edit</Link>
              <button onClick={() => deleteUser(user.email)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
