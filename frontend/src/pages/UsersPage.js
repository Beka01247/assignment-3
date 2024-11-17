import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersList from '../components/Users/UsersList';
import UserForm from '../components/Users/UserForm';
import UserDetail from '../components/Users/UserDetail';

const UsersPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<UsersList />} />
      <Route path="new" element={<UserForm />} />
      <Route path=":email/edit" element={<UserForm />} />
      <Route path=":email" element={<UserDetail />} />
    </Routes>
  </div>
);

export default UsersPage;
