import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiseaseTypeList from '../components/DiseaseType/DiseaseTypeList';
import DiseaseTypeForm from '../components/DiseaseType/DiseaseTypeForm';
import DiseaseTypeDetail from '../components/DiseaseType/DiseaseTypeDetail';

const DiseaseTypePage = () => (
  <div>
    <Routes>
      <Route path="/" element={<DiseaseTypeList />} />
      <Route path="new" element={<DiseaseTypeForm />} />
      <Route path=":id" element={<DiseaseTypeDetail />} />
      <Route path=":id/edit" element={<DiseaseTypeForm />} />
    </Routes>
  </div>
);

export default DiseaseTypePage;
