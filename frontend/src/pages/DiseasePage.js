import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiseaseList from '../components/Disease/DiseaseList';
import DiseaseForm from '../components/Disease/DiseaseForm';
import DiseaseDetail from '../components/Disease/DiseaseDetail';

const DiseasePage = () => (
  <div>
    <Routes>
      <Route path="/" element={<DiseaseList />} />
      <Route path="new" element={<DiseaseForm />} />
      <Route path=":disease_code" element={<DiseaseDetail />} />
      <Route path=":disease_code/edit" element={<DiseaseForm />} />
    </Routes>
  </div>
);

export default DiseasePage;
