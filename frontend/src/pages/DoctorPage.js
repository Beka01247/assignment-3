import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorList from '../components/Doctor/DoctorList';
import DoctorForm from '../components/Doctor/DoctorForm';
import DoctorDetail from '../components/Doctor/DoctorDetail';

const DoctorPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<DoctorList />} />
      <Route path="new" element={<DoctorForm />} />
      <Route path=":email" element={<DoctorDetail />} />
      <Route path=":email/edit" element={<DoctorForm />} />
    </Routes>
  </div>
);

export default DoctorPage;
