import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpecializeList from '../components/Specialize/SpecializeList';
import SpecializeForm from '../components/Specialize/SpecializeForm';
import SpecializeDetail from '../components/Specialize/SpecializeDetail';

const SpecializePage = () => (
  <div>
    <Routes>
      <Route path="/" element={<SpecializeList />} />
      <Route path="new" element={<SpecializeForm />} />
      <Route path=":id/:email" element={<SpecializeDetail />} />
      <Route path=":id/:email/edit" element={<SpecializeForm />} />
    </Routes>
  </div>
);

export default SpecializePage;
